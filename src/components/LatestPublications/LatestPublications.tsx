import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Post, Photo, User } from 'components/api/types';

import { LatestPublicationsWrapper, CoverPhotoWrapper, LatestPublicationsContent, PublicationsList, Metadata } from './LatestPublications.styles';

const LatestPublications: React.FC = () => {
  const [publications, setPublications] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>();
  const [photos, setPhotos] = useState<Photo[]>();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPublications(json));

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUsers(json));

    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((json) => setPhotos(json));
  }, [])

  const findUserById = (userId: number) => {
    return users && users.find(({id}) => id === userId);
  }

  const findPhotoByPostId = (postId: number) => {
    return photos && photos.find(({albumId}) => albumId === postId);
  }

  return (
    <LatestPublicationsWrapper>
      <CoverPhotoWrapper photoSrc={findPhotoByPostId(publications[0]?.id)?.url}>
        <h4>
          {publications && publications[0]?.title}
        </h4>
        <Metadata>
          <span>
            7 jan, 2020
          </span>
          <span>
            <img alt={''} src={findPhotoByPostId(publications[0]?.id)?.thumbnailUrl} />
            {publications && findUserById(publications[0]?.userId)?.name}
          </span>
        </Metadata>
      </CoverPhotoWrapper>
      <LatestPublicationsContent>
        <h3>Latest publications</h3>

        <PublicationsList>
          {publications && publications.slice(1, 4).map(publication => (<>
            <img src={findPhotoByPostId(publication.id)?.url} alt=""/>
            <div>
              <h5>{publication.title}</h5>
              <Metadata>
              <span>
                7 jan, 2020
              </span>
                <span>
                <img alt={''} src={findPhotoByPostId(publication.id)?.thumbnailUrl} />
                {findUserById(publication.userId)?.name}
              </span>
              </Metadata>
            </div>
          </>))}
        </PublicationsList>
        <Link to={'/'}>See more publications</Link>
      </LatestPublicationsContent>
    </LatestPublicationsWrapper>
  )
}

export default LatestPublications;