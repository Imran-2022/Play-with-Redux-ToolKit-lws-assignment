### Play-with-Redux-ToolKit-lws-assignment


##

✓ এই এসাইনমেন্টটি শুধুমাত্র **redux toolkit** দিয়ে করতে হবে। এজন্য যেভাবে এই মডিউলে vanilla node js প্রোজেক্টে **@reduxjs/toolkit** প্যাকেজ install করে প্রোজেক্টটি দেখানো হয়েছে, সেভাবেই আপনারা একটি প্রজেক্ট সেটআপ করে নিবেন। কোনো প্রকার UI based framwork দিয়ে করা যাবে না।

✓ আমাদের দেয়া api থেকে একটি Object আপনাকে async thunk function লিখে fetch করে নিয়ে আসতে হবে। প্রতিটি রিকুয়েস্টে আলাদা আলাদা একটি Object পাবেন।

```
API - http://localhost:9000/videos
```

✓ এই Object এর **tags** নামে একটি প্রোপার্টি আছে যেখানে কিছু tag আছে। এই tag গুলো ব্যবহার করে আরো একটি async thunk dispatch করতে হবে যেটি সার্ভার থেকে search করে রিলেটেড ভিডিও গুলো নিয়ে আসে। যেমনঃ

```
http://localhost:9000/videos?tags_like=javascript&tags_like=react
```

✓ উপরের API থেকে যেই Array of Object পাবেন, সেই Object গুলোর ভেতরে views নামে একটি Property থাকবে, সেই property এর ভিত্তিতে Object গুলো সাজিয়ে Console এ লগ করতে হবে। যেগুলোর ভিউ বেশি থাকবে সেগুলো প্রথমে দেখাবে, এবং সব শেষে কম যেটি সেটি থাকবে।

✓ Console এ লগ করার জন্যে অবশ্যই **redux-logger** এই middleware টি ব্যবহার করতে হবে।

✓ মনে রাখবেন, একবার node application run করে দিলেই দুটি API request sequentially পর পর রান করতে হবে অর্থাৎ প্রথম রিকুয়েস্টে যেই ট্যাগ গুলো পাবো সেই ট্যাগ দিয়ে ‘tags_like’ সার্চ দিয়ে বাকি রিলেটেড ভিডিও গুলো নিয়ে আসতে হবে।
##

## result : -
![image](https://user-images.githubusercontent.com/91984650/229034593-0e821c56-bb30-4420-88ee-234270bf3e3d.png)

## code outcome : 
```
node index.js
 action video/fetchVideo/pending @ 11:52:52.442
   prev state {
    video: { loading: false, video: {}, error: '' },
    relatedVideos: { loading: false, relatedVideos: [], error: '' }
  }
   action     {
    type: 'video/fetchVideo/pending',
    payload: undefined,
    meta: {
      arg: undefined,
      requestId: 'hm4_017OQ2sEeR4UN2puW',
      requestStatus: 'pending'
    }
  }
   next state {
    video: { loading: true, video: {}, error: '' },
    relatedVideos: { loading: false, relatedVideos: [], error: '' }
  }
 action video/fetchVideo/fulfilled @ 11:52:52.497
   prev state {
    video: { loading: true, video: {}, error: '' },
    relatedVideos: { loading: false, relatedVideos: [], error: '' }
  }
   action     {
    type: 'video/fetchVideo/fulfilled',
    payload: {
      id: 5,
      title: 'SASS Tutorial in English - Overview of SASS',     
      description: 'In this video, I have given a high level overview of popular CSS Pre-processor SASS which helps us managing 
our styles at scale. If you have a basic understanding of CSS & 
JavaScript, this 10 mins SASS Tutorial will help you getting started with SASS.',
      author: 'Learn with Sumit',
      avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
      date: 'Nov 22, 2021',
      duration: '10:12',
      views: '1.5k',
      link: 'https://www.youtube-nocookie.com/embed/4tV1Mfi4fMA',
      thumbnail: 'https://i3.ytimg.com/vi/4tV1Mfi4fMA/maxresdefault.jpg',
      tags: [ 'sass', 'css', 'ui' ],
      likes: 0,
      unlikes: 0
    },
    meta: {
      arg: undefined,
      requestId: 'hm4_017OQ2sEeR4UN2puW',
      requestStatus: 'fulfilled'
    }
  }
   next state {
    video: {
      loading: false,
      video: {
        id: 5,
        title: 'SASS Tutorial in English - Overview of SASS',   
        description: 'In this video, I have given a high level overview of popular CSS Pre-processor SASS which helps us managing our styles at scale. If you have a basic understanding of CSS 
& JavaScript, this 10 mins SASS Tutorial will help you getting started with SASS.',
        author: 'Learn with Sumit',
        avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
        date: 'Nov 22, 2021',
        duration: '10:12',
        views: '1.5k',
        link: 'https://www.youtube-nocookie.com/embed/4tV1Mfi4fMA',
        thumbnail: 'https://i3.ytimg.com/vi/4tV1Mfi4fMA/maxresdefault.jpg',
        tags: [ 'sass', 'css', 'ui' ],
        likes: 0,
        unlikes: 0
      },
      error: ''
    },
    relatedVideos: { loading: false, relatedVideos: [], error: '' }
  }
 action relatedVideos/fetchVideos/pending @ 11:52:52.502        
   prev state {
    video: {
      loading: false,
      video: {
        id: 5,
        title: 'SASS Tutorial in English - Overview of SASS',   
        description: 'In this video, I have given a high level overview of popular CSS Pre-processor SASS which helps us managing our styles at scale. If you have a basic understanding of CSS 
& JavaScript, this 10 mins SASS Tutorial will help you getting started with SASS.',
        author: 'Learn with Sumit',
        avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
        date: 'Nov 22, 2021',
        duration: '10:12',
        views: '1.5k',
        link: 'https://www.youtube-nocookie.com/embed/4tV1Mfi4fMA',
        thumbnail: 'https://i3.ytimg.com/vi/4tV1Mfi4fMA/maxresdefault.jpg',
        tags: [ 'sass', 'css', 'ui' ],
        likes: 0,
        unlikes: 0
      },
      error: ''
    },
    relatedVideos: { loading: false, relatedVideos: [], error: '' }
  }
   action     {
    type: 'relatedVideos/fetchVideos/pending',
    payload: undefined,
    meta: {
      arg: [ 'sass', 'css', 'ui' ],
      requestId: 'QTV07ix274hX4KpW6llzF',
      requestStatus: 'pending'
    }
  }
   next state {
    video: {
      loading: false,
      video: {
        id: 5,
        title: 'SASS Tutorial in English - Overview of SASS',   
        description: 'In this video, I have given a high level overview of popular CSS Pre-processor SASS which helps us managing our styles at scale. If you have a basic understanding of CS  
& JavaScript, this 10 mins SASS Tutorial will help you getting started with SASS.',
        author: 'Learn with Sumit',
        avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
        date: 'Nov 22, 2021',
        duration: '10:12',
        views: '1.5k',
        link: 'https://www.youtube-nocookie.com/embed/4tV1Mfi4fMA',
        thumbnail: 'https://i3.ytimg.com/vi/4tV1Mfi4fMA/maxresdefault.jpg',
        tags: [ 'sass', 'css', 'ui' ],
        likes: 0,
        unlikes: 0
      },
      error: ''
    },
    relatedVideos: { loading: true, relatedVideos: [], error: '' }
  }
 action relatedVideos/fetchVideos/fulfilled @ 11:52:52.554      
   prev state {
    video: {
      loading: false,
      video: {
        id: 5,
        title: 'SASS Tutorial in English - Overview of SASS',   
        description: 'In this video, I have given a high level overview of popular CSS Pre-processor SASS which helps us managing our styles at scale. If you have a basic understanding of CSS 
& JavaScript, this 10 mins SASS Tutorial will help you getting started with SASS.',
        author: 'Learn with Sumit',
        avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
        date: 'Nov 22, 2021',
        duration: '10:12',
        views: '1.5k',
        link: 'https://www.youtube-nocookie.com/embed/4tV1Mfi4fMA',
        thumbnail: 'https://i3.ytimg.com/vi/4tV1Mfi4fMA/maxresdefault.jpg',
        tags: [ 'sass', 'css', 'ui' ],
        likes: 0,
        unlikes: 0
      },
      error: ''
    },
    relatedVideos: { loading: true, relatedVideos: [], error: '' }
  }
   action     {
    type: 'relatedVideos/fetchVideos/fulfilled',
    payload: [
      {
        id: 7,
        title: 'Tailwind CSS Tutorial Bangla - Introduction to Tailwind CSS',
        description: 'Tailwind is a utility-first CSS framework 
to rapidly build modern websites without ever leaving your HTML. In this Tailwind CSS tutorial, I have given a short introduction and overview of Tailwind CSS in Bangla language. Also, I have 
explained, why Tailwind vs Bootstrap debate should be stopped as both are useful in their own ways.',
        author: 'Learn with Sumit',
        avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
        date: 'Oct 15, 2021',
        duration: '10:12',
        views: '7.4k',
        link: 'https://www.youtube-nocookie.com/embed/smDa6hoxLKI',
        thumbnail: 'https://i3.ytimg.com/vi/smDa6hoxLKI/maxresdefault.jpg',
        tags: [ 'tailwind', 'css', 'ui' ],
        likes: 0,
        unlikes: 0
      },
      {
        id: 3,
        title: 'Tailwind CSS 3 tutorial - Upgrade to Tailwind 3 
| Tailwind CSS Bangla Tutorial',
        description: 'Tailwind CSS v3.0 came with incredible performance gains, huge workflow improvements, and a seriously ridiculous number of new features. In this tutorial - I have tried to explain different new features of Tailwind CSS version 3, how 
to install tailwind css 3, how to upgrade from tailwind v2 to v3 etc.',
        author: 'Learn with Sumit',
        avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
        date: 'March 11, 2022',
        duration: '10:12',
        views: '7.3k',
        link: 'https://www.youtube-nocookie.com/embed/4M7D3O2XX4o',
        thumbnail: 'https://i3.ytimg.com/vi/4M7D3O2XX4o/maxresdefault.jpg',
        tags: [ 'tailwind', 'css' ],
        likes: 0,
        unlikes: 0
      },
      {
        id: 5,
        title: 'SASS Tutorial in English - Overview of SASS',   
        description: 'In this video, I have given a high level overview of popular CSS Pre-processor SASS which helps us managing our styles at scale. If you have a basic understanding of CSS 
& JavaScript, this 10 mins SASS Tutorial will help you getting started with SASS.',
        author: 'Learn with Sumit',
        avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
        date: 'Nov 22, 2021',
        duration: '10:12',
        views: '1.5k',
        link: 'https://www.youtube-nocookie.com/embed/4tV1Mfi4fMA',
        thumbnail: 'https://i3.ytimg.com/vi/4tV1Mfi4fMA/maxresdefault.jpg',
        tags: [ 'sass', 'css', 'ui' ],
        likes: 0,
        unlikes: 0
      }
    ],
    meta: {
      arg: [ 'sass', 'css', 'ui' ],
      requestId: 'QTV07ix274hX4KpW6llzF',
      requestStatus: 'fulfilled'
    }
  }
   next state {
    video: {
      loading: false,
      video: {
        id: 5,
        title: 'SASS Tutorial in English - Overview of SASS',   
        description: 'In this video, I have given a high level overview of popular CSS Pre-processor SASS which helps us managing our styles at scale. If you have a basic understanding of CSS 
& JavaScript, this 10 mins SASS Tutorial will help you getting started with SASS.',
        author: 'Learn with Sumit',
        avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
        date: 'Nov 22, 2021',
        duration: '10:12',
        views: '1.5k',
        link: 'https://www.youtube-nocookie.com/embed/4tV1Mfi4fMA',
        thumbnail: 'https://i3.ytimg.com/vi/4tV1Mfi4fMA/maxresdefault.jpg',
        tags: [ 'sass', 'css', 'ui' ],
        likes: 0,
        unlikes: 0
      },
      error: ''
    },
    relatedVideos: {
      loading: false,
      relatedVideos: [
        {
          id: 7,
          title: 'Tailwind CSS Tutorial Bangla - Introduction to Tailwind CSS',
          description: 'Tailwind is a utility-first CSS framework to rapidly build modern websites without ever leaving your HTML. In this Tailwind CSS tutorial, I have given a short introduction and overview of Tailwind CSS in Bangla language. Also, I have explained, why Tailwind vs Bootstrap debate should be stopped 
as both are useful in their own ways.',
          author: 'Learn with Sumit',
          avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
          date: 'Oct 15, 2021',
          duration: '10:12',
          views: '7.4k',
          link: 'https://www.youtube-nocookie.com/embed/smDa6hoxLKI',
          thumbnail: 'https://i3.ytimg.com/vi/smDa6hoxLKI/maxresdefault.jpg',
          tags: [ 'tailwind', 'css', 'ui' ],
          likes: 0,
          unlikes: 0
        },
        {
          id: 3,
          title: 'Tailwind CSS 3 tutorial - Upgrade to Tailwind 
3 | Tailwind CSS Bangla Tutorial',
          description: 'Tailwind CSS v3.0 came with incredible performance gains, huge workflow improvements, and a seriously ridiculous number of new features. In this tutorial - I have tried to explain different new features of Tailwind CSS version 3, how to install tailwind css 3, how to upgrade from tailwind v2 to 
v3 etc.',
          author: 'Learn with Sumit',
          avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
          date: 'March 11, 2022',
          duration: '10:12',
          views: '7.3k',
          link: 'https://www.youtube-nocookie.com/embed/4M7D3O2XX4o',
          thumbnail: 'https://i3.ytimg.com/vi/4M7D3O2XX4o/maxresdefault.jpg',
          tags: [ 'tailwind', 'css' ],
          likes: 0,
          unlikes: 0
        },
        {
          id: 5,
          title: 'SASS Tutorial in English - Overview of SASS', 
          description: 'In this video, I have given a high level overview of popular CSS Pre-processor SASS which helps us managing our styles at scale. If you have a basic understanding of CSS & JavaScript, this 10 mins SASS Tutorial will help you getting started with SASS.',
          author: 'Learn with Sumit',
          avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
          date: 'Nov 22, 2021',
          duration: '10:12',
          views: '1.5k',
          link: 'https://www.youtube-nocookie.com/embed/4tV1Mfi4fMA',
          thumbnail: 'https://i3.ytimg.com/vi/4tV1Mfi4fMA/maxresdefault.jpg',
          tags: [ 'sass', 'css', 'ui' ],
          likes: 0,
          unlikes: 0
        }
      ],
      error: ''
    }
  }
```

