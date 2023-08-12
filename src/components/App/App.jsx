import {
  BlogCard,
  Container,
  Section,
  Heading,
  Statistics,
  ForbesList,
  CryptoHistory,
  CustomSection,
} from 'components';
import { ToDo } from 'components/Todo/Todo';
import article from 'data/article.json';

export const App = () => {
  const total = 10;
  return (
    <Section>
      <ToDo/>
      <Container>
        <Heading marginBottom="50px" textAlign="center" color="tomato">
          Task 1
        </Heading>
        <CustomSection title="section 1 blogcard" color="red">
          {total > 0 && (
            <BlogCard
              poster={article.poster}
              tag={article.tag}
              title={article.title}
              description={article.description}
              userName={article.name}
              avatar={article.avatar}
              postedAt={article.postedAt}
            />
          )}
        </CustomSection>

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2
        </Heading>
        <CustomSection>
          <Statistics />
        </CustomSection>

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        <CustomSection>
          <ForbesList />
        </CustomSection>

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
        <CustomSection>
          <CryptoHistory />
        </CustomSection>
      </Container>
    </Section>
  );
};
