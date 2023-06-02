import { FaHeart, FaStar } from "react-icons/fa";
import { categories, navs, products } from "./data";
import styles from "./index.module.scss";

export const FooterCompoment = () => {
  return (
    <div className={styles.FooterCompoment}>
      {navs.map(({ name, icon }, index) => {
        return (
          <div key={index} className="">
            <div className={styles.icon}>{icon}</div>
            <div className={styles.name}>{name}</div>
          </div>
        );
      })}
    </div>
  );
};

export const MostPopularCompoment = () => {
  return (
    <div className={styles.MostPopularCompoment}>
      <div className="">
        <div className="d-flex justify-content-between align-items-center">
          <div className={styles.title}>Most Popular</div>
          <div className={styles.txt}>See All</div>
        </div>
      </div>
      <article>
        <div className={styles.btn}>{"All"}</div>
        {categories.map(({ img, title }, index) => {
          return (
            <div className={styles.btn} key={index}>
              {title}
            </div>
          );
        })}
      </article>
      <section>
        {products.map(({ title, price, ratings, sold, img }, index) => {
          return (
            <article className="">
              <div style={{ backgroundImage: img }} className={styles.cardImg}>
                <div className={styles.heartIcon}>
                  <FaHeart />
                </div>
              </div>
              <div className={styles.title}>{title}</div>
              <div className={styles.flex}>
                <FaStar className={styles.icon} />
                <div className={styles.ratings}>{ratings}</div>
                <div className=""></div>
                <div className={styles.sold}>{sold}</div>
              </div>
              <div className={styles.price}>{price}</div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export const SpecilalOfferCompoment = () => {
  return (
    <div className={styles.SpecilalOfferCompoment}>
      <div className="">
        <div className="d-flex justify-content-between align-items-center">
          <div className={styles.title}>Special Offers</div>
          <div className={styles.txt}>See All</div>
        </div>
        <section>
          <div className="">
            <div className={styles}>30%</div>
            <div className={styles}>Today’s Special!</div>
            <div className={styles}>
              Get discount for every order, only valid for today
            </div>
          </div>
          <div
            style={{ backgroundImage: "url('/media/home/Image.svg')" }}
            className={styles.img}
          ></div>
        </section>

        <article>
          {categories.map(({ img, title }, index) => {
            return (
              <div className="" key={index}>
                <div
                  style={{ backgroundImage: img }}
                  className={styles.img}
                ></div>
                <div className={styles.txt}>{title}</div>
              </div>
            );
          })}
        </article>
      </div>
    </div>
  );
};

export const HeaderCompoment = () => {
  return (
    <div className="">
      <div className={styles.header}>
        <div className={styles.flex}>
          <div
            style={{ backgroundImage: "url('/media/home/Ellipse.png')" }}
            className={styles.userImg}
          ></div>
          <div className={styles}>
            <div className={styles.title}>Good Morning 👋</div>
            <div className={styles.text}>Andrew Ainsley</div>
          </div>
        </div>
        <div className={styles.flex}>
          <div
            style={{ backgroundImage: "url('/media/home/Notification.svg')" }}
            className={styles.img}
          ></div>
          <div
            style={{ backgroundImage: "url('/media/home/Group.png')" }}
            className={styles.img}
          ></div>
        </div>
      </div>
      <div className={styles.inputContainer}>
        <div
          style={{ backgroundImage: "url('/media/home/Group (3).png')" }}
          className={styles.searchImg}
        ></div>
        <input type="text" placeholder="search" />
        <div
          style={{ backgroundImage: "url('/media/home/Filter.png')" }}
          className={styles.filterImg}
        ></div>
      </div>
    </div>
  );
};
