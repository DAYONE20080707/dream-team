// components/ui/frame/TopPageHeadline_01.tsx
import classNames from "classnames"

interface TopPageHeadline_01Props {
  mainTitle: React.ReactNode
  subtitleTop?: React.ReactNode
  subtitleBottom?: React.ReactNode
  description?: React.ReactNode
  parentDirectoryName?: string
  parentDirectoryLink?: string
  className?: string // 親要素のclassName
  titleClassName?: string // h1用のclassName
  subtitleClassName?: string // h2用のclassName
  descriptionClassName?: string // p用のclassName
}

const TopPageHeadline_01: React.FC<TopPageHeadline_01Props> = ({
  mainTitle,
  subtitleTop,
  subtitleBottom,
  description,
  parentDirectoryName,
  parentDirectoryLink,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  descriptionClassName = "",
}) => {
  return (
    <section className={classNames(" w-full", className)}>
      {subtitleTop && (
        <p
          className={classNames(
            "text-lg md:text-[28px] font-bold tracking-[0.05em] !leading-[110%] text-accentColor",
            subtitleClassName
          )}
        >
          {subtitleTop}
        </p>
      )}
      <h1
        className={classNames(
          "text-3xl md:text-[67px] !leading-[160%] tracking-[0.05em] mt-4 font-bold text-accentColor",
          titleClassName
        )}
      >
        {mainTitle}
      </h1>
      {description && (
        <p
          className={classNames(
            "mt-4 md:text-lg !leading-[140%] tracking-[0.05em] font-normal",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </section>
  )
}

export default TopPageHeadline_01
