import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./AccountItem.module.scss";
import Image from "../Image";

const cx = classNames.bind(styles);
const AccountItem = ({ data }) => {
  return (
    <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
      <Image src={data.avatar} alt={data.avatar} className={cx("avatar")} />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>{data.full_name}</span>
          {data.tick && (
            <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
          )}
        </h4>
        <span className={cx("username")}>{data.nickname}</span>
      </div>
    </Link>
  );
};

export default AccountItem;
