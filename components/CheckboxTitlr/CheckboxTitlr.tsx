"use client"
import { CREATE_ACCOUNT, CREATE_ACCOUNT_UA } from "@/constants/constants"

interface CheckboxTitlrProps {
  content: {
    ID: string
    TITLE: string
    COMPOUND: boolean
  }
  language: string | null
}

const CheckboxTitlr = ({ content, language }: CheckboxTitlrProps) => {
  const data = language === "uk" || !language ? CREATE_ACCOUNT : CREATE_ACCOUNT_UA

  return (
    <div className="flex items-center">
      {content?.COMPOUND ?
        <p className="ml-2 text-sm lg:text-base">
          {data.CHECK_BOX.LIFT_CONTENT}{" "}
          <span className="text-extraLight">{content.TITLE}</span>{" "}
          {data.CHECK_BOX.RIGHT_CONTENT}
        </p> :
        <p className="ml-2 text-sm lg:text-base">{content.TITLE}</p>
      }
    </div>
  )
}

export { CheckboxTitlr }