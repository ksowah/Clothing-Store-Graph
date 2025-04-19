    import services from "../../services";

const authResolvers = {
  Query: {
    getCurrentUser: (_, args, ctx, info) => {
      return services.auth.getCurrentUser(args, ctx);
    },
  },
  Mutation: {
    loginUser: (_, args, ctx) => {
      return services.auth.loginUser(args,  ctx);
    },
    registerUser: (_, args, ctx) => {
      return services.auth.registerUser(args.input, ctx);
    },
  },
};

export default authResolvers;