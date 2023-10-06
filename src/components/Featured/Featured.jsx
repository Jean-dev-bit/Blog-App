import React from "react";
import styles from "./featured.module.css"
import Image from "next/image";
const Featured = () => {

    return(
                <div className={styles.container}>
                    <h1 className={styles.title}> 
                    
                        <b>Hey, yml dev here! </b> Discover my stories and creative ideas.
                    
                    </h1>


                    <div className={styles.post}>
                            <div className={styles.imgContainer}>
                                <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                            </div>
                            <div className={styles.textContainer}>
                                <h1 className={styles.postTitle}>Welcome to ymlblog ! Explore, enjoy and discover. Your visit makes us happy!</h1>
                                <p className={styles.postDesc}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Adipisci officiis tenetur doloribus ipsum molestias veniam architecto. 
                                Est repellat, ratione recusandae assumenda dolorum explicabo tempora repellendus. 
                                Deserunt distinctio quisquam deleniti quidem!
                                </p>
                                <button className={styles.button}>Read More</button>
                            </div>

                    </div>
                </div>



    );
};


export default Featured