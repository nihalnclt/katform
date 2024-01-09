const userDbRepositoryImpl = () => {
    const findById = (id: string) => {};

    return { findById };
};

export type userDbRepositoryImplType = typeof userDbRepositoryImpl;
export default userDbRepositoryImpl;
