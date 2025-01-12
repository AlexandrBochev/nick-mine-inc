import React, { JSX } from "react";
import { IcError } from "../icons/IcError";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IForm } from "@/interfaces/interfaces";

interface InputProps {
  content: {
    ID: string;
    LABEL: string;
    TYPE: string;
    ICON: () => JSX.Element;
    MESSAGE?: string | undefined;
    EXTRA?: string | undefined;
    VALIDATION: {
      required: boolean
      minLength?: number
      pattern?: RegExp
    }
  }
  register: UseFormRegister<IForm>
  errors: FieldErrors<IForm>
}

const Input = ({ content, register, errors }: InputProps) => {
  return (
    <div className="relative w-full">
      <input
        type={content.TYPE}
        className={`
          w-full h-8.5 bg-secondery text-white pl-4 pr-16 rounded-xs
          focus:outline-none lg:h-11.5 lg:pl-5.5
          ${content.EXTRA ? "pr-36 lg:pr-48" : "pr-16"}
        `}
        {...register(content?.ID, content?.VALIDATION)}
      />
      <label
        className="
          absolute left-4 -top-2 text-xs px-2 bg-background rounded-xs
          lg:left-5.5 lg:-top-2.5 lg:text-sm lg:px-3
        "
      >
        {content.LABEL}
      </label>
      <div className="absolute top-2 right-5.5 lg:top-2.5 lg:right-8 flex items-center gap-4">
        {content.EXTRA && (
          <p
            className="
              text-xs text-light bg-extra px-2 py-0.5 rounded-xs
              lg:text-sm lg:px-3 lg:py-1
            "
          >
            {content.EXTRA}
          </p>
        )}
        {errors[content.ID] && <IcError />}
        <content.ICON />
      </div>
      {content.MESSAGE && (
        <p className="text-xs text-tertiary pl-1 mt-1 lg:text-sm lg:mt-2">
          <span className="mr-2 lg:mr-3">·</span>
          {content.MESSAGE}
        </p>
      )}
    </div>
  );
};

export { Input };
