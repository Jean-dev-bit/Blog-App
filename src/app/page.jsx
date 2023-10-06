import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/Featured/Featured";
import CategoryList from "@/components/CategoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";
export default function Home() {
  return ( 

    <div className={styles.container}>
          <Featured/>
          <CategoryList/>

          <div className={styles.content}>

                <CardList/>
                <Menu/>

          </div>
        
    </div>
);

}
