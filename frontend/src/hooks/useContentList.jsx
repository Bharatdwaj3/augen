import { useEffect, useState } from 'react';
import api from '../util/api';

export function useContentList(ids, enabled = true) {
  const [stories, setStories] = useState([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    if (!enabled || ids.length === 0) {
      setStories([]);
      return;
    }

    const fetchAll = async () => {
      setFetching(true);
      try {
        const results = await Promise.all(
          ids.map(id =>
            api.get(`/content/${id}`).then(res => res.data).catch(() => null)
          )
        );
        setStories(results.filter(Boolean));
      } catch (err) {
        console.error(err);
        setStories([]);
      } finally {
        setFetching(false);
      }
    };

    fetchAll();
  }, [ids, enabled]);

  return { stories, fetching };
}