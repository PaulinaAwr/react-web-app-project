import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import { useHistory } from 'react-router-dom';

import { Entities2Icon, PeopleIcon } from 'styles';
import { WorkspaceCard, WorkspacesWrapper, WorkspaceCardPhoto, WorkspaceCardHeading, WorkspaceIcon, WorkspaceCardMeta, WorkspaceCardDate } from './WorkspacesSlider.styles';
import 'pure-react-carousel/dist/react-carousel.es.css';

const WorkspacesSlider: React.FC = () => {
  const history = useHistory();

  const goToWorkspaces = () => {
    history.push('/workspaces');
  }

  return (
    <WorkspacesWrapper>
      <h2>Workspaces</h2>

      <CarouselProvider
        naturalSlideWidth={250}
        naturalSlideHeight={220}
        totalSlides={5}
        visibleSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <WorkspaceCard onClick={goToWorkspaces}>
              <WorkspaceCardPhoto src={'https://picsum.photos/seed/picsum/300/200'} />
              <WorkspaceCardHeading>
                <WorkspaceIcon>
                  <Entities2Icon />
                </WorkspaceIcon>
                <h4>Client contract</h4>
              </WorkspaceCardHeading>
              <WorkspaceCardMeta>
                <span>
                  <Entities2Icon />
                  Contract
                </span>

                <span>
                  <PeopleIcon />
                  150 users
                </span>
              </WorkspaceCardMeta>
              <WorkspaceCardDate>
                Last update 2 days ago
              </WorkspaceCardDate>
            </WorkspaceCard>
          </Slide>

          <Slide index={1}>
            <WorkspaceCard onClick={goToWorkspaces}>
              <WorkspaceCardPhoto src={'https://picsum.photos/seed/picsum/300/200'} />
              <WorkspaceCardHeading>
                <WorkspaceIcon>
                  <Entities2Icon />
                </WorkspaceIcon>
                <h4>Client contract</h4>
              </WorkspaceCardHeading>
              <WorkspaceCardMeta>
                <span>
                  <Entities2Icon />
                  Contract
                </span>

                <span>
                  <PeopleIcon />
                  150 users
                </span>
              </WorkspaceCardMeta>
              <WorkspaceCardDate>
                Last update 2 days ago
              </WorkspaceCardDate>
            </WorkspaceCard>
          </Slide>

          <Slide index={2}>
            <WorkspaceCard onClick={goToWorkspaces}>
              <WorkspaceCardPhoto src={'https://picsum.photos/seed/picsum/300/200'} />
              <WorkspaceCardHeading>
                <WorkspaceIcon>
                  <Entities2Icon />
                </WorkspaceIcon>
                <h4>Client contract</h4>
              </WorkspaceCardHeading>
              <WorkspaceCardMeta>
                <span>
                  <Entities2Icon />
                  Contract
                </span>

                <span>
                  <PeopleIcon />
                  150 users
                </span>
              </WorkspaceCardMeta>
              <WorkspaceCardDate>
                Last update 2 days ago
              </WorkspaceCardDate>
            </WorkspaceCard>
          </Slide>

          <Slide index={3}>
            <WorkspaceCard onClick={goToWorkspaces}>
              <WorkspaceCardPhoto src={'https://picsum.photos/seed/picsum/300/200'} />
              <WorkspaceCardHeading>
                <WorkspaceIcon>
                  <Entities2Icon />
                </WorkspaceIcon>
                <h4>Client contract</h4>
              </WorkspaceCardHeading>
              <WorkspaceCardMeta>
                <span>
                  <Entities2Icon />
                  Contract
                </span>

                <span>
                  <PeopleIcon />
                  150 users
                </span>
              </WorkspaceCardMeta>
              <WorkspaceCardDate>
                Last update 2 days ago
              </WorkspaceCardDate>
            </WorkspaceCard>
          </Slide>

          <Slide index={4}>
            <WorkspaceCard onClick={goToWorkspaces}>
              <WorkspaceCardPhoto src={'https://picsum.photos/seed/picsum/300/200'} />
              <WorkspaceCardHeading>
                <WorkspaceIcon>
                  <Entities2Icon />
                </WorkspaceIcon>
                <h4>Client contract</h4>
              </WorkspaceCardHeading>
              <WorkspaceCardMeta>
                <span>
                  <Entities2Icon />
                  Contract
                </span>

                <span>
                  <PeopleIcon />
                  150 users
                </span>
              </WorkspaceCardMeta>
              <WorkspaceCardDate>
                Last update 2 days ago
              </WorkspaceCardDate>
            </WorkspaceCard>
          </Slide>
        </Slider>
      </CarouselProvider>
    </WorkspacesWrapper>
  )
}

export default WorkspacesSlider;