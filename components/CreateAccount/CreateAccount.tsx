"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { CREATE_ACCOUNT, CREATE_ACCOUNT_UA } from "@/constants/constants"
import { Heading } from "../Heading/Heading"
import { Button } from "../ui/Button/Button"
import { Input } from "../ui/Input/Input"
import { IcUK } from "../ui/icons/IcUK"
import { IcUA } from "../ui/icons/IcUA"
import { CheckboxTitlr } from "../CheckboxTitlr/CheckboxTitlr"
import { Checkbox } from "../ui/Checkbox/Checkbox"
import { IcError } from "../ui/icons/IcError"
import { IForm } from "@/interfaces/interfaces"

const CreateAccount = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
    const language = searchParams.get("lang") || null
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<IForm>({ mode: 'onChange' })
  const data = language === "uk" || !language ? CREATE_ACCOUNT : CREATE_ACCOUNT_UA

  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log('data: ', data)
    toast.success(`${CREATE_ACCOUNT.ACCOUNT_CREATED}
      Name: ${data.accountName}
      Email: ${data.email}
    `)
    // Add your logic here
    reset()
  }

  const handleNoLogic = (title: string) => {
    console.log(title)
    toast.error(`${CREATE_ACCOUNT.NO_LOGIC}
      ${title}
    `)
  }

  return (
    <section
      className="
        w-full flex flex-col py-8
        md:w-107.5 lg:w-157.5 md:ml-22 lg:ml-30 lg:pb-12
      "
    >
      <Heading
        title={data.TITLE}
        subtitle={data.SUBTITLE}
        action={data.SIGN_IN}
        handleAction={() => handleNoLogic(data.SIGN_IN)}
      />

      <form onSubmit={ handleSubmit(onSubmit) } className="mb-10 lg:mb-14">
        <section className="space-y-5 mb-3 lg:space-y-8 lg:mb-6">
          {data.INPUTS.map((input) => (
            <div key={input.ID}>
              <Input content={input} errors={errors} register={register} />
            </div>
          ))}
        </section>

        <section className="space-y-1 mb-5 lg:space-y-2 lg:mb-6">
          {data.CHECK_BOX.CONTENT.map(content => (
              <div key={content.ID} className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox content={content} register={register} />
                  <CheckboxTitlr content={content} language={language} />
                </div>
                {errors[content.ID] && <IcError />}
              </div>
            )
          )}
        </section>

        <Button
          title={data.BUTTON}
          type="submit"
          shape="button"
          disabled={isSubmitting || Object.keys(errors).length > 0}
        />
      </form>

      <footer className="w-full flex items-center justify-between">
        {data.FOOTER.map((footer) => (
          <div key={footer.TITLE} className="w-full">
            <Button
              title={footer.TITLE}
              className="w-full"
              onClick={() => handleNoLogic(footer.TITLE)}
              Icon={footer.ICON}
            />
          </div>
        ))}
      </footer>

      <section className="flex absolute gap-4 right-0 md:top-6.5 md:-right-10 lg:top-7 lg:right-0">
        <Button
          Icon={IcUK} onClick={() => router.push("?lang=uk")}
          className={`${language === "uk" || !language ? "opacity-100" : "opacity-30"}`}
        />
        <Button
          Icon={IcUA} onClick={() => router.push("?lang=ua")}
          className={`${language === "ua" ? "opacity-100" : "opacity-30"}`}
        />
      </section>
    </section>
  );
};

export { CreateAccount }
