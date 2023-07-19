import Image from "next/image";
import { Code } from "../Code";

export default {
  Image,
  code: (props: any) => <Code {...props} />,
};
