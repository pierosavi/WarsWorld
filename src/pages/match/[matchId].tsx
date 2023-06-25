import { usePlayers } from "frontend/context/players";
import { Tile } from "server/schemas/tile";
import { useRouter } from "next/router";
import {
  Application,
  Assets,
  BaseTexture,
  SCALE_MODES,
  Sprite,
  Texture,
  Container,
  Spritesheet,
  AnimatedSprite,
  DisplayObject,
  utils,
} from "pixijs";
import { useEffect, useRef, useState } from "react";
import { Layer } from "@pixi/layers";
import { PlayerInMatch } from "shared/types/server-match-state";

import { trpc } from "frontend/utils/trpc-client";
import getJSON from "../../spriteSheet/getJSON";

BaseTexture.defaultOptions.scaleMode = SCALE_MODES.NEAREST;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const Match = ({ spriteData }) => {
  const { currentPlayer } = usePlayers();
  const [players, setPlayers] = useState<PlayerInMatch[] | null | undefined>(
    null
  );
  const [mapData, setMapData] = useState<Tile[][] | null | undefined>(null);
  const pixiCanvasRef = useRef<HTMLCanvasElement>(null);

  const { query } = useRouter();
  const matchId = query.matchId as string;

  // make trpc call to get data and set it as players and mapData
  trpc.match.full.useQuery(
    { matchId, playerId: currentPlayer?.id ?? "" },
    {
      enabled: currentPlayer !== undefined,
      onSuccess(data) {
        if (data === null) {
          throw new Error(`Match ${matchId} not found!`);
        }

        if (!players) {
          setPlayers(data.players);
        }

        if (!mapData) {
          setMapData(data.map.tiles);
        }
      },
    }
  );

  //Important useEffect to make sure Pixi
  // only gets updated when pixiCanvasRef or mapData changes
  // we dont want it to be refreshed in react everytime something changes.
  useEffect(() => {
    const app = new Application({
      view: pixiCanvasRef.current,
      resolution: 2,
      backgroundColor: "#3a4817",
      //TODO: The width needs to be = mapData[0].length * 16, but useEffect runs before mapData is loaded, so mapData[0] is null
      //This width and height only work for CF
      width: 16 * 18 + 16,
      height: 16 * 18 + 16,
    });
    //8 is half of 16, currently our border half a tile. Needed so mountains and cities display fully at the top.
    app.stage.position.set(0, 8);

    //let render our specific cursor
    //TODO: Unsure why does the cursor.gif isnt working as intended... in the IDE it looks static but on windows photos it animates correctly.
    //TODO: Cursor is pretty big, wish we could make it a bit smaller
    const awCursor =
      'url("http://localhost:3000/img/spriteSheet/cursor.gif"),auto';
    app.renderer.events.cursorStyles.default = awCursor;

    const mapContainer = new Container();
    mapContainer.x = 0;
    mapContainer.y = 0;
    //allows for us to use zIndex
    mapContainer.sortableChildren = true;
    app.stage.addChild(mapContainer);

    const spriteSheets: Spritesheet[] = [];
    console.log(spriteData.countries);

    spriteData.countries.forEach((country: string) => {
      const texture = BaseTexture.from(spriteData[country].meta.image);
      const sheet = new Spritesheet(texture, spriteData[country]);
      sheet.parse();
      spriteSheets.push(sheet);
    });

    if (mapData != undefined || mapData != null) {
      let tile;
      mapData.forEach((col, colIndex) => {
        mapData[colIndex].forEach((row, rowIndex) => {
          const type = row.type;
          //ITS A PROPERTY
          if (row.hasOwnProperty("playerSlot")) {
            const slot: number = row.playerSlot;

            //NEUTRAL
            if (row.playerSlot === -1) {
              //TODO: Sometimes Next bugs out and it doesnt load the
              tile = new Sprite(spriteSheets[2].textures[type + "-0.png"]);
              //NOT NEUTRAL
            } else {
              tile = new AnimatedSprite(spriteSheets[slot].animations[type]);
              //TODO: Seems like properties have different animation speeds...
              tile.animationSpeed = 0.03;
              tile.play();
            }

            //NOT A PROPERTY
          } else {
            if (row.hasOwnProperty("variant"))
              tile = new Sprite(
                spriteSheets[2].textures[row.type + "-" + row.variant + ".png"]
              );
            else tile = new Sprite(spriteSheets[2].textures[row.type + ".png"]);
          }
          //makes our sprites render at the bottom, not from the top.
          tile.anchor.set(0.5, 1);
          //tile.zIndex = (mapData.length - colIndex) * 10;
          tile.x = (rowIndex + 1) * 16;
          tile.y = (colIndex + 1) * 16;
          mapContainer.addChild(tile);
        });
      });
    }
    console.log(mapData);
    return () => {
      app.stop();
    };
  }, [pixiCanvasRef, mapData, spriteData]);

  if (!spriteData) return <h1>Loading...</h1>;
  else {
    return (
      <div className={"@m-10"}>
        <h1>Basic pixi.js dev environment </h1>
        <canvas
          style={{
            imageRendering: "pixelated",
          }}
          ref={pixiCanvasRef}
        ></canvas>
      </div>
    );
  }
};
export default Match;

export async function getServerSideProps() {
  //TODO: Unsure why getJSON gets inconsistent errors with only "orange-star", "blue-moon" but works correctly when there are multiple fake/wrong additions
  //TODO: Should we call all the spritesheets or just the ones the players will need? Unsure how we would know which players are playing what before even loading the match (which right now we do this call before the tRPC call that gets the match data...)
  const spriteData = await getJSON([
    "orange-star",
    "blue-moon",
    "fake",
    "fake",
    "fake",
    "fake",
  ]);
  return { props: { spriteData } };
}
