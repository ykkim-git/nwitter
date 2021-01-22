import { v4 as uuidv4 } from "uuid";
import { dbService, storageService } from "fbase";
import React, { useEffect, useState } from "react";
import NweetFactory from "components/NweetFactory";
import Nweet from "components/Nweet";

const Home = ({ userObj }) => {
  const [nweets, setNweets] = useState([]); // get nweet from DB

  /** old get nweets */
  /**
  const getNweets = async () => {
    const dbNweets = await dbService.collection("nweets").get();
    dbNweets.forEach((document) => {
      const nweetObject = {
        ...document.data(),
        id: document.id,
      };
      //set 함수쓸때 값 대신에 함수를 전달하면 리액트는 이전값에 접근할 수 있게 된다.
      setNweets((prev) => [nweetObject, ...prev]);
    });
  };
  */

  useEffect(() => {
    // getNweets();
    dbService.collection("nweets").onSnapshot((snapshot) => {
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArray);
    });
  }, []);

  return (
    <div className="container">
      <NweetFactory userObj={userObj} />
      <div style={{ marginTop: 30 }}>
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
