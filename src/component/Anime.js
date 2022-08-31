import React from 'react';
import { Box } from '@chakra-ui/react';
import { useQuery, gql } from '@apollo/client';

// query schema
const AnimeList = gql`
  query getAnimeList {
    Page {
      media {
        siteUrl
        title {
          english
          native
        }
        description
        coverImage {
          medium
        }
        bannerImage
        volumes
        episodes
      }
    }
  }
`;
export default function Anime() {
  // use the useQuery hook to fetch data
  const { data, loading, error } = useQuery(AnimeList);
  if (loading) return <Box>loading...</Box>;
  if (error) return <Box>{error.message}</Box>;
  return <Box>{JSON.stringify(data)}</Box>;
}
