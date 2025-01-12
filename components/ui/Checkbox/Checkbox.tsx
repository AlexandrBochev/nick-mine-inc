"use client"
import { useState } from "react"
import { IcCheck } from "../icons/IcCheck"
import { UseFormRegister } from "react-hook-form"
import { IForm } from "@/interfaces/interfaces"

interface CheckboxProps {
  content: {
    ID: string
    TITLE: string
    VALIDATION: {
      required: boolean;
    }
  }
  register: UseFormRegister<IForm>
}

const Checkbox = ({ content, register }: CheckboxProps) => {
  const [checked, setChecked] = useState(false)
  const { ID, VALIDATION } = content

  return (
    <label
      className={`
        cursor-pointer size-3 flex items-center justify-center
        ${true ? "bg-extraLight" : "bg-primary"} rounded-xs transition-all
        lg:size-4
      `}
    >
      <input
        type="checkbox"
        className="hidden"
        {...register(ID, {
          ...VALIDATION,
          onChange: (e) => setChecked(e.target.checked)
        })} 
      />
      {checked && <IcCheck />}
    </label>
  );
};

export { Checkbox }
