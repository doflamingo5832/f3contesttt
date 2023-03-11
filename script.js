function OpeningCeremony(score, callbackFnc) {
    console.log("Let the games begin");
  
    setTimeout(() => {
      Race100M(score, callbackFnc);
    }, 1000);
  }
  
  function Race100M(score, callbackFnc) {
    console.log("Starting Race100M");
  
    setTimeout(() => {
      let times = {
        red: Math.floor(Math.random() * 6) + 10,
        yellow: Math.floor(Math.random() * 6) + 10,
        blue: Math.floor(Math.random() * 6) + 10,
        green: Math.floor(Math.random() * 6) + 10,
      };
  
      let sortedTimes = Object.entries(times).sort((a, b) => a[1] - b[1]);
  
      let first = sortedTimes[0][0];
      let second = sortedTimes[1][0];
  
      score[first] += 50;
      score[second] += 25;
  
      console.log(`Race100M Winner: ${first}`);
      console.log(`Score: ${JSON.stringify(score)}`);
  
      callbackFnc(score, LongJump);
    }, 3000);
  }
  
  function LongJump(score, callbackFnc) {
    console.log("Starting LongJump");
  
    setTimeout(() => {
      let colors = ["red", "yellow", "blue", "green"];
      let color = colors[Math.floor(Math.random() * colors.length)];
  
      score[color] += 150;
  
      console.log(`LongJump Winner: ${color}`);
      console.log(`Score: ${JSON.stringify(score)}`);
  
      callbackFnc(score, HighJump);
    }, 2000);
  }
  
  function HighJump(score, callbackFnc) {
    console.log("Starting HighJump");
  
    let winner = prompt("Who secured the highest jump? (Red/Yellow/Blue/Green)");
  
    if (winner) {
      winner = winner.toLowerCase();
      if (score.hasOwnProperty(winner)) {
        score[winner] += 100;
  
        console.log(`HighJump Winner: ${winner}`);
        console.log(`Score: ${JSON.stringify(score)}`);
      } else {
        console.log("Invalid color entered");
      }
    } else {
      console.log("Event was cancelled");
    }
  
    callbackFnc(score, AwardCeremony);
  }
  
  function AwardCeremony(score) {
    console.log(`Final Score: ${JSON.stringify(score)}`);
  
    let sortedScore = Object.entries(score).sort((a, b) => b[1] - a[1]);
  
    console.log(
      `${sortedScore[0][0]} came first with ${sortedScore[0][1]} points.`
    );
    console.log(
      `${sortedScore[1][0]} came second with ${sortedScore[1][1]} points.`
    );
    console.log(
      `${sortedScore[2][0]} came third with ${sortedScore[2][1]} points.`
    );
  }
  
  let score = {
    red: 0,
    yellow: 0,
    blue: 0,
    green: 0,
  };
  
  OpeningCeremony(score, Race100M);
