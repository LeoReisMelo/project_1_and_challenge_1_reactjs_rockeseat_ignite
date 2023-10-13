import { Post, PostType } from "./components/Post";
import { Header } from "./components/Header";
import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/LeoReisMelo.png",
      name: "Leonardo Reis",
      role: "Developer"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fix no NLW return, evento da rocketseat. O nome do projeto é DoctorCare"},
      {type: "link", content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date('2023-10-10 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Front"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fix no NLW return, evento da rocketseat. O nome do projeto é DoctorCare"},
      {type: "link", content: "teste.ola/doctorcare"},
    ],
    publishedAt: new Date('2023-08-10 20:00:00')
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            );
          })}
        </main>
      </div>
    </>
  )
}

