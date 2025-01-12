import { IcEmail } from "./../Components/ui/icons/IcEmail";
import { IcHearset } from "./../Components/ui/icons/IcHearset";
import { IcPassword } from "./../Components/ui/icons/IcPassword";
import { IcUser } from "./../Components/ui/icons/IcUser";
import { IcUserId } from "./../Components/ui/icons/IcUserId";

export const MAIN_LAYOUT = {
  METADATA: {
    title: "Nick Mine Inc.",
    description: "Test task for VOLL Digital Agency",
  },
};

export const HERO = {
  TITLE: "Nick Mine Inc.",
  IMAGE: "/hero-image.webp",
};

export const ROUTING = {
  HOME: "/",
};

export const ACCENT_SYMBOLS = [".", "!", "?"];

export const CREATE_ACCOUNT = {
  TITLE: "Create an account.",
  SUBTITLE: "Already have an account?",
  SIGN_IN: "Sign in",
  ACCOUNT_CREATED: "Account created successfully!",
  NO_LOGIC: "This logic has't implemented yet!",
  INPUTS: [
    {
      ID: "userId",
      LABEL: "User ID",
      TYPE: "text",
      ICON: IcUserId,
      VALIDATION: {
        required: false,
      },
    },
    {
      ID: "password",
      LABEL: "Password",
      TYPE: "password",
      ICON: IcPassword,
      MESSAGE: "8 characters minimun",
      VALIDATION: {
        required: true,
        minLength: 8,
      },
    },
    {
      ID: "accountName",
      LABEL: "Account Name",
      TYPE: "text",
      ICON: IcUser,
      MESSAGE: "Visible nickname for your profile",
      VALIDATION: {
        required: true,
        minLength: 2,
      },
    },
    {
      ID: "email",
      LABEL: "Email",
      TYPE: "email",
      ICON: IcEmail,
      EXTRA: "Resend (60s)",
      VALIDATION: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      },
    },
    {
      ID: "verificationCode",
      LABEL: "Varification Code",
      TYPE: "text",
      ICON: IcEmail,
      VALIDATION: {
        required: false,
      },
    },
  ],
  CHECK_BOX: {
    LIFT_CONTENT: "[Required] I read the",
    RIGHT_CONTENT: "and I agree to the terms.",
    CONTENT: [
      {
        ID: "termsOfService",
        TITLE: "Terms of Service",
        COMPOUND: true,
        VALIDATION: {
          required: true,
        },
      },
      {
        ID: "privacyPolicy",
        TITLE: "Privacy Policy",
        COMPOUND: true,
        VALIDATION: {
          required: true,
        },
      },
      {
        ID: "receivePromotionalEmails",
        TITLE: "[Optional] I would like to receive promotional emails.",
        COMPOUND: false,
        VALIDATION: {
          required: false,
        },
      },
    ],
  },
  BUTTON: "Create Account",
  FOOTER: [
    {
      TITLE: "Contact Support",
      ICON: IcHearset,
    },
    {
      TITLE: "Have Promo Code?",
    },
  ],
};

export const CREATE_ACCOUNT_UA = {
  TITLE: "Створіть акаунт.",
  SUBTITLE: "Вже є акаунт?",
  SIGN_IN: "Увійти",
  INPUTS: [
    {
      ID: "userId",
      LABEL: "Ідентифікатор користувача",
      TYPE: "text",
      ICON: IcUserId,
      VALIDATION: {
        required: false,
      },
    },
    {
      ID: "password",
      LABEL: "Пароль",
      TYPE: "password",
      ICON: IcPassword,
      MESSAGE: "Мінімум 8 символів",
      VALIDATION: {
        required: true,
        minLength: 8,
      },
    },
    {
      ID: "accountName",
      LABEL: "Ім'я акаунта",
      TYPE: "text",
      ICON: IcUser,
      MESSAGE: "Видиме ім'я для вашого профілю",
      VALIDATION: {
        required: true,
        minLength: 3,
      },
    },
    {
      ID: "email",
      LABEL: "Електронна пошта",
      TYPE: "email",
      ICON: IcEmail,
      EXTRA: "Відправити повторно (60с)",
      VALIDATION: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      },
    },
    {
      ID: "verificationCode",
      LABEL: "Код підтвердження",
      TYPE: "text",
      ICON: IcEmail,
      VALIDATION: {
        required: false,
      },
    },
  ],
  CHECK_BOX: {
    LIFT_CONTENT: "[Обов'язково] Я прочитав",
    RIGHT_CONTENT: "я погоджуюсь з умовами.",
    CONTENT: [
      {
        ID: "termsOfService",
        TITLE: "Умови обслуговування",
        COMPOUND: true,
        VALIDATION: {
          required: true,
        },
      },
      {
        ID: "privacyPolicy",
        TITLE: "Політика конфіденційності",
        COMPOUND: true,
        VALIDATION: {
          required: true,
        },
      },
      {
        ID: "receivePromotionalEmails",
        TITLE: "[Необов'язково] Я хочу отримувати рекламні листи.",
        COMPOUND: false,
        VALIDATION: {
          required: false,
        },
      },
    ],
  },
  BUTTON: "Створити акаунт",
  FOOTER: [
    {
      TITLE: "Зв'язатися з підтримкою",
      ICON: IcHearset,
    },
    {
      TITLE: "Є промокод?",
    },
  ],
};
