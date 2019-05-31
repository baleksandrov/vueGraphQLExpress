import { mergeResolvers } from "merge-graphql-schemas";

import Note from "./Note/";

const resolvers = [Note];

export default mergeResolvers(resolvers);
