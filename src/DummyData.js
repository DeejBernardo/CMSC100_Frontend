export const Users = [
     {
        id:1,
        firstName: "Javs",
        lastName: "Salvador",
        username: "javs23",
        hobbies: "Bebetime, bestie time",
        friendsId: [2, 3, 4, 5],

     },
     {
      id:2,
      firstName: "Christine",
      lastName: "Dacera",
      username: "daceruhhh",
      hobbies: "umiyak malala, kumain madami",
      friendsId: [1, 3, 4]
        
      },
      {
        id:3,
        firstName: "Super",
        lastName: "Idol",
        username: "DarrenTwinnie",
        hobbies: "live love laugh",
        friendsId: [1, 2, 4, 5],
      },
      {
        id:4,
        firstName: "Gwyneth",
        lastName: "Chua",
        username: "BaddieNg2021",
        hobbies: "magparty",
        friendsId: [1, 2, 3, 5]
      },
      {
        id:5,
        firstName: "JK",
        lastName: "Labajo",
        username: "DarrenEnemy",
        hobbies: "landiin si maureen, tumambay sa ilalim ng puting ilaw",
        friendsId: [1, 2, 4]
      },
  ];
  
  export const Posts = [
    {
      id: 1,
      desc: "party party kahet may kobid! #medyobadgirl",
      date: "5 mins ago",
      userId: 4,
      like: 0
    },
    {
        id: 2,
        desc: "gagi parehhhh",
        date: "10 mins ago",
        userId: 1,
        like: 69,
        likedBy: []
      },
      {
        id: 3,
        desc: "Naniniwala na ako sa forever, simula nung nakilala kitaaaaaaaaaa <333 #b0ss_mHad4m.q23",
        date: "1 hour ago",
        userId: 4,
        like: 3,
        likedBy: []
      },
  ];
  
export const Comments = [
    {
        id: 1,
        comment: "Grabe ka lods badboy",
        userId: 2,
        postId: 1
    },
    {
        id: 2,
        comment: "taena kulong ka ngaun wAHAHAHHAHAHAH",
        userId: 5,
        postId: 1
    },
    {
        id: 3,
        comment: "PAREHHHH",
        userId: 2,
        postId: 2
    },
    {
        id: 4,
        comment: "PARTY TAYO PAREHHHHH",
        userId: 4,
        postId: 2
    },
    {
      id: 5,
      comment: "Super Idol的笑容 都没你的甜 八月正午的阳光 都没你耀眼 热爱 105 °C的你 滴滴清纯的蒸馏水 Super Idol",
      userId: 3,
      postId: 2
  }

  ]