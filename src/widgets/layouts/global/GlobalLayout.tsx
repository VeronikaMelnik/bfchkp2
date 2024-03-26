import { DEFAULT_LANGUAGE, LanguageEnum } from "@entities/constants";
import { LocalesLayout } from "./locales/LocalesLayout";
import { ThemeLayout } from "./ui";
import { PageWrapper } from "./ui/PageWrapper";

interface Props {
  className: string;
  children: React.ReactNode;
  lang?: LanguageEnum;
}

export const GlobalLayout = ({
  className,
  children,
  lang = DEFAULT_LANGUAGE,
}: Props) => {
  return (
    <ThemeLayout className={className}>
      <PageWrapper lang={lang}>
        <LocalesLayout lang={lang} />
        {children}
      </PageWrapper>
    </ThemeLayout>
  );
};
