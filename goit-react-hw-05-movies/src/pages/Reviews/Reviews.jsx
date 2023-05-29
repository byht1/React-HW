import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { serverResponse, serverResponseUS } from 'server/api';
import {
  Span,
  ReviewsBox,
  List,
  Autor,
  Elements,
  Text,
} from './Reviews.styled';

export default function Reviews() {
  const { id } = useParams();
  const [language, setLanguage] = useState(false);
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    serverData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function serverData() {
    const data = await serverResponse(id);
    const results = await data.results;

    if (results.length === 0) {
      const dataUS = await serverResponseUS(id);
      const resultsUS = await dataUS.results;
      if (resultsUS.length === 0) {
        return;
      }
      setLanguage(true);
      setReviewsList(resultsUS);
      return;
    }
    setReviewsList(results);
  }

  return (
    <ReviewsBox>
      {!language && <p>Вибачне але ми не знайшли відгуків</p>}
      {language && (
        <Text>
          Вибачте але ми не знайшли відгуків на вашошій рідній мові. Але ми
          знайшли на іншій мові.
        </Text>
      )}

      <List>
        {reviewsList.map(({ id, author, content, created_at, url }) => {
          return (
            <Elements key={id}>
              <Autor>{author}</Autor>
              <Text>
                <Span>Відгук:</Span> {content}
              </Text>
              <Text>
                <Span>Дата:</Span> {created_at.split('T')[0]}
              </Text>
              <Text href={url}>
                <Span>Посилання на оригінал віднуку:</Span> {url}
              </Text>
            </Elements>
          );
        })}
      </List>
    </ReviewsBox>
  );
}
