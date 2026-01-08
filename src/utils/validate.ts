export type UserSigninInformation = {
    nickname: string;
    password: string;
};

function validateUser(values: UserSigninInformation) {
    const errors = {
        nickname: "",
        password: "",
    };

    if (!(values.password.length === 6)) {
        errors.password = "비밀번호는 6자 이어야 합니다.";
    }

    return errors;
}

function validateSignin (values: UserSigninInformation) {
    return validateUser(values);
}

export { validateSignin };