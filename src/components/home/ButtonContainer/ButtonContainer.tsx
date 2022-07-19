import React from "react";

import Button from "../Button";
import ContainerTitle from "./ContainerTitle";

import styles from "./ButtonContainer.module.scss";

const ButtonContainer: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.group}>
        <ContainerTitle text={"Button variants:"} />
        <div className={styles.buttonsGroup}>
          <div className={styles.singleGroup}>
            <p>{"<Button />"}</p>
            <Button />
          </div>
          <div className={styles.singleGroup}>
            <p>{'<Button  variant={"outline"} />'}</p>
            <Button variant={"outline"} />
          </div>
          <div className={styles.singleGroup}>
            <p>{"<Button variant={'text'} />"}</p>
            <Button variant={"text"} />
          </div>
        </div>
      </div>
      {/*    -------------------------------*/}
      <div className={styles.group}>
        <ContainerTitle text={"Button disabled variants:"} />
        <div className={styles.buttonsGroup}>
          <div className={styles.singleGroup}>
            <p>{"<Button disableShadow />"}</p>
            <Button disableShadow />
          </div>
          <div className={styles.singleGroup}>
            <p>{"<Button disabled />"}</p>
            <Button disabled />
          </div>
          <div className={styles.singleGroup}>
            <p>{'<Button disabled variant={"text"} />'}</p>
            <Button disabled variant={"text"} />
          </div>
        </div>
      </div>
      {/*-----------------------------------------------------*/}

      <div className={styles.group}>
        <ContainerTitle text={"Buttons with icons:"} />
        <div className={styles.buttonsGroup}>
          <div className={styles.singleGroup}>
            <p>{'<Button startIcon={"done"} />'}</p>
            <Button startIcon={"done"} />
          </div>
          <div className={styles.singleGroup}>
            <p>{'<Button endIcon={"favorite_border"} />'}</p>
            <Button endIcon={"favorite_border"} />
          </div>
        </div>
      </div>
      {/*-----------------------------------------------------*/}
      <div className={styles.group}>
        <ContainerTitle text={"Button sizes:"} />
        <div className={styles.buttonsGroup}>
          <div className={styles.singleGroup}>
            <p>{"<Button size=”sm” />"}</p>
            <Button size={"sm"} />
          </div>
          <div className={styles.singleGroup}>
            <p>{"<Button size=”md” />"}</p>
            <Button size={"md"} />
          </div>
          <div className={styles.singleGroup}>
            <p>{"<Button size=”lg” />"}</p>
            <Button size={"lg"} />
          </div>
        </div>
      </div>
      {/*-----------------------------------------------------*/}
      <div className={styles.group}>
        <ContainerTitle text={"Button sizes:"} />
        <div className={styles.buttonsGroup}>
          <div className={styles.singleGroup}>
            <p>{"<Button color='default' />"}</p>
            <Button color={"default"} />
          </div>
          <div className={styles.singleGroup}>
            <p>{"<Button color=”primary” />"}</p>
            <Button color={"primary"} />
          </div>
          <div className={styles.singleGroup}>
            <p>{"<Button color=”secondary” />"}</p>
            <Button color={"secondary"} />
          </div>
          <div className={styles.singleGroup}>
            <p>{"<Button color=”danger” />"}</p>
            <Button color={"danger"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonContainer;
