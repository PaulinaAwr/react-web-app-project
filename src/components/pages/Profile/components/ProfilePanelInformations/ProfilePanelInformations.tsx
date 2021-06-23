import React, { useContext } from 'react';

import ProposalsTable from './components/ProposalsTable/ProposalsTable';
import FeesTable from './components/FeesTable/FeesTable';
import EditableParagraph from "components/ui/EditableParagraph/EditableParagraph";
import { UserContext } from 'contexts/user.context';

import { ProfileHeading, ProfileLabel, FileAttachment, Correspondant, MessageButton, ProfileButton } from '../../Profile.styles';
import { Card } from 'styles/shared';

const ProfilePanelInformations: React.FC = () => {
        const { hourlyFee, setHourlyFee, termsAndConditions, setTermsAndConditions, servicesAndProjects, setServicesAndProjects, proposals, reviews, fees, correspondants } = useContext(UserContext);

        const handleSetHourlyFee = (value: string) => setHourlyFee(value);
        const handleSetTermsAndConditions = (value: string) => setTermsAndConditions(value);
        const handleSetServicesAndProjects = (value: string) => setServicesAndProjects(value);

        return (
          <Card>
                <ProfileHeading>Panel informations</ProfileHeading>

                <ProfileLabel>Hourly fee</ProfileLabel>
                <EditableParagraph onSave={handleSetHourlyFee}>{hourlyFee}</EditableParagraph>
                <ProfileLabel>Terms & conditions</ProfileLabel>
                <EditableParagraph onSave={handleSetTermsAndConditions}>{termsAndConditions}</EditableParagraph>
                <FileAttachment>Attachment_lorem-ipsum25342.jpg</FileAttachment>

                <ProfileHeading>Services & projects</ProfileHeading>
                <EditableParagraph onSave={handleSetServicesAndProjects}>{servicesAndProjects}</EditableParagraph>
                <ProfileHeading>Internal correspondants</ProfileHeading>{correspondants.map(name => <Correspondant>{name}<MessageButton>Message</MessageButton><ProfileButton>Profile</ProfileButton></Correspondant>)}

                <hr/>
                <ProfileHeading>Proposals</ProfileHeading>
                <ProposalsTable entities={proposals}/>

                <hr/>
                <ProfileHeading>Internal reviews</ProfileHeading>
                <ProposalsTable entities={reviews}/>

                <hr/>
                <ProfileHeading>Amount of fees</ProfileHeading>
                <FeesTable fees={fees}/>
        </Card>
        );
}

export default ProfilePanelInformations;