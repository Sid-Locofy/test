import { FunctionComponent } from "react";
import "antd/dist/antd.css";
import { Button, TextField, FormControlLabel, Checkbox } from "@mui/material";
import { Button as AntButton } from "antd";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PaperClipOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SendOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import RectangleComponent1 from "../components/RectangleComponent1";
import RectangleComponent from "../components/RectangleComponent";
import styles from "./MacBookPro141.module.css";

const MacBookPro141: FunctionComponent = () => {
  return (
    <div className={styles.macBookPro141}>
      <Button
        className={styles.rectangleButton}
        sx={{ width: 115 }}
        variant="contained"
        color="primary"
      />
      <TextField
        className={styles.rectangleTextField}
        sx={{ width: 115 }}
        color="warning"
        variant="outlined"
        multiline
        margin="none"
      />
      <FormControlLabel
        className={styles.rectangleFormControlLabel}
        label=""
        labelPlacement="end"
        control={<Checkbox color="primary" defaultChecked size="medium" />}
      />
      <div className={styles.rectangleDiv} />
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv1} />
        <div className={styles.rectangleDiv2} />
      </div>
      <div className={styles.groupDiv1}>
        <div className={styles.rectangleDiv1} />
        <div className={styles.rectangleDiv4} />
        <div className={styles.rectangleDiv5} />
      </div>
      <button className={styles.groupButton}>
        <RectangleComponent1 />
        <RectangleComponent />
      </button>
      <div className={styles.groupDiv2}>
        <div className={styles.rectangleDiv1} />
        <div className={styles.rectangleDiv4} />
      </div>
      <AntButton
        className={styles.buttonPrimaryTextAntButton}
        type="primary"
        size="middle"
        shape="default"
      >
        Button
      </AntButton>
      <AntButton
        className={styles.buttonAntButton}
        type="primary"
        icon={<SearchOutlined />}
        size="middle"
        shape="default"
      >
        Button
      </AntButton>
      <AntButton
        className={styles.buttonAntButton1}
        type="primary"
        icon={<SearchOutlined />}
        size="middle"
        shape="default"
      />
    </div>
  );
};

export default MacBookPro141;
