import React from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);
const AccountItem = () => {
  return (
    <div className={cx("wrapper")}>
      <img
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1666561165987841.jpeg?x-expires=1654779600&x-signature=Yao2NN7lbeunovtZkW4nKOq5q54%3D"
        alt="avatar"
        className={cx("avatar")}
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyen Van Hai</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>nguyenvanhai13</span>
      </div>
    </div>
  );
};

export default AccountItem;
