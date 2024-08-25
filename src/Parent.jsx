import { useEffect, useState } from 'react';
import { App } from './App';

export const Parent = () => {
  const [text, setText] = useState();
  const [num, setNum] = useState(0);
  const [isShowFlg, setIsShowFlg] = useState(true);

  const changeShowToggle = () => {
    setIsShowFlg(!isShowFlg);
  };

  const countUp = () => {
    setNum((prev) => prev + 1);
  };

  const changeText = (e) => {
    setText(e.target.value);
  };

  // 関心のある関数が更新された時だけ動かす処理を記載する
  useEffect(() => {
    console.log(isShowFlg);
    if (num > 0) {
      if (num % 3 === 0) {
        isShowFlg || setIsShowFlg(true);
      } else {
        isShowFlg && setIsShowFlg(false);
      }
    }
  }, [num]);

  return (
    <>
      <App color="red">もう昼ですよ</App>
      <App color="blue" message="もう昼なんですね" />
      <input
        value={text}
        onChange={changeText}
        type="text"
        placeholder="何か入力してください"
      />
      <p>ここを更新します：{text}</p>
      <button onClick={countUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={changeShowToggle}>表示/非表示</button>
      {isShowFlg && <p>アホな顔</p>}
    </>
  );
};
