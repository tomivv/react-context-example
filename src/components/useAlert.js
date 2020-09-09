import { useState, useEffect } from "react";

export default function useAlert() {
  const [alert, setAlert] = useState({hidden: true, msg: '', title: ''});

  async function changeAlert(AlertObj) {
    setAlert(AlertObj);
  }

  useEffect(() => {});
  return { alert, changeAlert }
}