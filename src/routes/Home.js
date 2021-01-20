import { dbService } from "fbase";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [nweet, setNweet] = useState(""); // set nweet at DB
  const [nweets, setNweets] = useState([]); // get nweet from DB

  // get nweets
  const getNweets = async () => {
    const dbNweets = await dbService.collection("nweets").get();
    dbNweets.forEach((document) => {
      const nweetObject = {
        ...document.data(),
        id: document.id,
      };
      /** set 함수쓸때 값 대신에 함수를 전달하면
      리액트는 이전값에 접근할 수 있게 된다. */
      setNweets((prev) => [nweetObject, ...prev]);
    });
  };

  useEffect(() => {
    getNweets();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    // set nweet
    await dbService.collection("nweets").add({
      text: nweet,
      createdAt: Date.now(),
      
    });
    setNweet("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Nweet" />
      </form>

      <div>
        {nweets.map((nweet) => (
          <div key={nweet.id}>
            <h4>{nweet.nweet}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
