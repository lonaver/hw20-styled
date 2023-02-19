import React, { useEffect, useState } from "react";
import styles from "./SingIn.module.css";
import {
  initialFormData,
  setDataFromLocalStirage,
  getDataFromLocalStirage,
} from "../../helper/constants";

const SingInPage = () => {
  const [state, updateFormData] = useState(initialFormData);
  useEffect(() => {
    const { password, email, isRemember } = getDataFromLocalStirage();
    if (isRemember) {
      state.password = password;
      state.email = email;
      state.isRemember = isRemember;
    }
  }, state);

  const handleChange = (e) => {
    let valueTarget = e.target.value.trim();
    if (e.target.name === "isRemember") {
      valueTarget = e.target.checked ? true : false;
    }
    updateFormData({
      ...state,
      [e.target.name]: valueTarget,
    });
  };

  const handleSubmit = () => {
    const Previos = getDataFromLocalStirage();
    if (state.email === Previos.email && state.password === Previos.password) {
      if (state.isRemember !== Previos.isRemember) {
        Previos.isRemember = state.isRemember;
        setDataFromLocalStirage(Previos);
      }
      alert("Congratulates!!! Your authorization is successful!");
    } else {
      alert("You are not authorisation :(");
    }
  };

  return (
    <div className={styles["modal-window"]}>
      <form className={styles["singin-form"]}>
        <div className={styles["thumb-img"]}></div>
        <h4 className={styles["title"]}>Sing In</h4>
        <input
          type="email"
          className={styles["singin-input-text"]}
          placeholder="Email Address *"
          name="email"
          defaultValue={state.email}
          onChange={handleChange}
        ></input>
        <input
          type="password"
          className={styles["singin-input-password"]}
          placeholder="Password *"
          name="password"
          defaultValue={state.password}
          onChange={handleChange}
        ></input>
        <label className={styles["modal-checkbox-remember"]}>
          <input
            className={styles["input-check"]}
            type="checkbox"
            name="isRemember"
            defaultChecked={state.isRemember}
            onChange={handleChange}
          />
          Remember me
        </label>
        <button
          type="submit"
          className={styles["btn-modal"]}
          onClick={handleSubmit}
        >
          SING IN
        </button>
        <div className={styles["wrapper-link"]}>
          <a href="" className={styles["link"]}>
            Forgot password?
          </a>
          <button type="button" className={styles["btn-link"]}>
            Dont have an account? Sing up
          </button>
        </div>
      </form>
      <div className={styles["copyright"]}>
        Copyright &#169; Your Website 2020
      </div>
    </div>
  );
};

export default SingInPage;
