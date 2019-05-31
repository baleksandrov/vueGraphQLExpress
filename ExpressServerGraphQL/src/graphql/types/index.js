
import { mergeTypes } from "merge-graphql-schemas";

import Note from "./Note/";

const typeDefs = [Note];

export default mergeTypes(typeDefs, { all: true });
