import { NextPage } from "next";
import React from "react";
import { useSelector } from "react-redux";
import { StoreState } from "../reducer";

interface Props {}

const Index: NextPage<Props> = () => {
  const foo = useSelector<StoreState, string>(state => state.test.foo);
  const host = useSelector<StoreState, string>(state => state.test.host);
  return (
    <div>
      <p>Foo is `{foo}`</p>
      {host !== "" && <p>On host `{host}`</p>}
      <p>Hello Next.js</p>
    </div>
  );
};

export default Index;
