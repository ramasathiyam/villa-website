import Image from "next/image";
import type { MenuItem } from "@/data/menu";
import styles from "./MenuItemCard.module.css";

export type MenuItemCardProps = {
  item: MenuItem;
};

export default function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        {item.image ? (
          <Image src={item.image} alt={item.name} fill className={styles.image} />
        ) : (
          // TODO: replace with real menu photography once available (plan §M.1)
          <span aria-hidden="true" />
        )}
      </div>
      <h4 className={styles.name}>{item.name}</h4>
      <p className={styles.description}>{item.description}</p>
    </article>
  );
}
