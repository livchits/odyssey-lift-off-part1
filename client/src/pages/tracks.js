import React from 'react';
import { Layout } from '../components';
import { gql, useQuery } from '@apollo/client';
import TrackCard from '../containers/track-card';
import QueryResult from '../components/query-result';
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

export const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      author {
        id
        name
        photo
      }
      length
      thumbnail
      modulesCount
    }
  }
`;

const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <QueryResult loading={loading} error={error} data={data}>
      <Layout grid>
        {data?.tracksForHome?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </Layout>
    </QueryResult>
  );
};

export default Tracks;
