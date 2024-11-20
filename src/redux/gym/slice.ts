import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGym } from '../../types/gym';
import { Offer } from '../../types/offer';
import { GetGymResult } from '../../api/gym/get';
import { ITag } from '../../types/tag';
import { ISocialMedia } from '../../types/socialMedia';
import { IOpeningTimes } from '../../types/openingTimes';
import { IBenefit } from '../../types/benefit';
import { IUtility } from '../../types/utility';

type LoadingState = 'none' | 'pending' | 'rejected' | 'successful';

export interface GymState {
    currentGymId?: IGym['internalId'];
    gyms: { [internalGymId: string]: IGym };
    gymLoadingState: LoadingState;
    allGymsLoadingState: LoadingState;
    offersLoadingState: LoadingState;
    searchString: string;
    searchResultIds: string[];
    tags: ITag[];
    selectedTags: ITag['id'][];
    utilities: IUtility[];
}

const initialState: GymState = {
    gymLoadingState: 'none',
    offersLoadingState: 'none',
    allGymsLoadingState: 'none',
    gyms: {},
    searchString: '',
    searchResultIds: [],
    tags: [],
    selectedTags: [],
    utilities: [
        {
            id: '85c6e6ff-5be7-413a-8741-303affc3b4d9',
            type: 0,
            html: '<p><strong>Angaben gemäß § 5 TMG:</strong></p>\n  <p>Max Mustermann<br>Mustermannstraße 1<br>12345 Musterstadt<br>Deutschland</p>\n\n  <p><strong>Vertreten durch:</strong> Max Mustermann</p>\n\n  <p><strong>Kontakt:</strong><br>\n  Telefon: +49 123 4567890<br>\n  E-Mail: max@mustermann.de</p>\n\n  <p><strong>Umsatzsteuer-ID:</strong><br>\n  Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE123456789</p>\n\n  <p><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br>\n  Max Mustermann<br>Mustermannstraße 1<br>12345 Musterstadt</p>\n\n  <p><strong>Haftung für Inhalte:</strong> Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.</p>'
        },
        {
            id: 'dc59a96a-4fb2-442e-a1b9-3f0e9f2a6563',
            type: 1,
            html: '<h1>Datenschutzerklärung</h1>\r\n  <p>Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen. Datenschutz hat einen besonders hohen Stellenwert für die Geschäftsleitung der Musterfirma. Eine Nutzung der Internetseiten der Musterfirma ist grundsätzlich ohne jede Angabe personenbezogener Daten möglich. Sofern eine betroffene Person besondere Services unseres Unternehmens über unsere Internetseite in Anspruch nehmen möchte, könnte jedoch eine Verarbeitung personenbezogener Daten erforderlich werden.</p>\r\n\r\n  <h2>Verantwortliche Stelle</h2>\r\n  <p>Verantwortliche Stelle im Sinne der Datenschutzgesetze ist:<br>\r\n  Max Mustermann<br>Mustermannstraße 1<br>12345 Musterstadt<br>Deutschland<br>E-Mail: datenschutz@mustermann.de</p>\r\n\r\n  <h2>Erhebung und Speicherung personenbezogener Daten</h2>\r\n  <p>Wir erheben und speichern folgende personenbezogene Daten: Name, Adresse, E-Mail-Adresse, Telefonnummer.</p>\r\n\r\n  <h2>Rechte der betroffenen Person</h2>\r\n  <p>Sie haben das Recht auf Auskunft über die von uns verarbeiteten personenbezogenen Daten, Berichtigung unrichtiger Daten sowie auf Löschung oder Einschränkung der Verarbeitung.</p>'
        }
    ]
};

const slice = createSlice({
    initialState,
    name: 'gym',
    reducers: {
        updateCurrentGymId(state, { payload }: PayloadAction<GymState['currentGymId']>) {
            state.currentGymId = payload;
        },
        addGym(state, { payload }: PayloadAction<GetGymResult[]>) {
            payload.forEach(({ id, name, address, gymImage, slogan, rating, tags }) => {
                const internalId = name.toLowerCase().replaceAll(' ', '_');

                if (!state.gyms[internalId]) {
                    state.gyms[internalId] = {
                        id,
                        internalId,
                        name,
                        address,
                        slogan,
                        tags,
                        gymImage,
                        abonnements: [],
                        rating
                    };
                }
            });
        },
        updateGym(state, { payload }: PayloadAction<IGym>) {
            const { internalId } = payload;

            state.gyms[internalId] = {
                ...state.gyms[internalId],
                ...payload
            };
        },
        updateGymField(
            state,
            { payload }: PayloadAction<{ internalId: IGym['internalId']; data: Partial<IGym> }>
        ) {
            const { internalId, data } = payload;

            state.gyms[internalId] = {
                ...state.gyms[internalId],
                ...data
            };
        },
        addAbonnements(state, { payload }: PayloadAction<AddAbonnementsProps>) {
            const gym = state.gyms[payload.id];

            if (gym) {
                gym.abonnements = [...gym.abonnements, ...payload.abonnements];
            }
        },
        addBenefit(state, { payload }: PayloadAction<AddBenefitProps>) {
            const gym = state.gyms[payload.id];

            if (gym) {
                if (gym.benefits) {
                    gym.benefits = [...gym.benefits, ...payload.benefit];
                } else {
                    gym.benefits = payload.benefit;
                }
            }
        },
        removeBenefit(state, { payload }: PayloadAction<{ internalId: string; id: string }>) {
            const gym = state.gyms[payload.internalId];

            if (gym) {
                if (gym.benefits) {
                    gym.benefits = gym.benefits.filter((benefit) => benefit.id !== payload.id);
                }
            }
        },
        removeAbonnement(state, { payload }: PayloadAction<{ internalId: string; id: string }>) {
            const gym = state.gyms[payload.internalId];

            if (gym) {
                if (gym.abonnements) {
                    gym.abonnements = gym.abonnements.filter(
                        (abonnement) => abonnement.id !== payload.id
                    );
                }
            }
        },
        setGymLoadingState(state, { payload }: PayloadAction<GymState['gymLoadingState']>) {
            state.gymLoadingState = payload;
        },
        setAllGymsLoadingState(state, { payload }: PayloadAction<GymState['allGymsLoadingState']>) {
            state.allGymsLoadingState = payload;
        },
        setOffersLoadingState(state, { payload }: PayloadAction<GymState['offersLoadingState']>) {
            state.offersLoadingState = payload;
        },
        setSearchString(state, { payload }: PayloadAction<GymState['searchString']>) {
            state.searchString = payload;
        },
        setTags(state, { payload }: PayloadAction<GymState['tags']>) {
            state.tags = payload;
        },
        setSelectedTags(state, { payload }: PayloadAction<GymState['selectedTags']>) {
            state.selectedTags = payload;
        },
        removeSocialMedia(
            state,
            { payload }: PayloadAction<{ internalId: IGym['internalId']; id: string }>
        ) {
            const { internalId, id } = payload;

            if (state.gyms[internalId]) {
                state.gyms[internalId].socialMedia?.filter((media) => media.id !== id);
            }
        },
        updateSocialMedia(
            state,
            {
                payload
            }: PayloadAction<{ internalId: IGym['internalId']; socialMedia: ISocialMedia }>
        ) {
            const { internalId, socialMedia } = payload;

            if (state.gyms[internalId]) {
                if (!state.gyms[internalId].socialMedia) {
                    state.gyms[internalId].socialMedia = [];
                }

                const existingEntryIndex = state.gyms[internalId].socialMedia?.findIndex(
                    (media) => media.type === socialMedia.type
                );

                if (existingEntryIndex && existingEntryIndex >= 0) {
                    state.gyms[internalId].socialMedia![existingEntryIndex] = socialMedia;
                } else {
                    state.gyms[internalId].socialMedia!.push(socialMedia);
                }
            }
        },
        updateAbonnement(
            state,
            { payload }: PayloadAction<{ internalId: IGym['internalId']; data: Offer }>
        ) {
            const { internalId, data } = payload;

            if (state.gyms[internalId]) {
                if (!state.gyms[internalId].abonnements) {
                    state.gyms[internalId].abonnements = [];
                }

                const existingEntryIndex = state.gyms[internalId].abonnements?.findIndex(
                    ({ id }) => id === data.id
                );

                if (existingEntryIndex && existingEntryIndex >= 0) {
                    state.gyms[internalId].abonnements![existingEntryIndex] = data;
                } else {
                    state.gyms[internalId].abonnements!.push(data);
                }
            }
        },
        updateOpeningTime(
            state,
            { payload }: PayloadAction<{ internalId: IGym['internalId']; time: IOpeningTimes }>
        ) {
            const { internalId, time } = payload;

            if (state.gyms[internalId]) {
                if (!state.gyms[internalId].openingTimes) {
                    state.gyms[internalId].openingTimes = [];
                }

                const existingEntryIndex = state.gyms[internalId].openingTimes?.findIndex(
                    (media) => media.type === time.type
                );

                if (existingEntryIndex && existingEntryIndex >= 0) {
                    state.gyms[internalId].openingTimes![existingEntryIndex] = time;
                } else {
                    state.gyms[internalId].openingTimes!.push(time);
                }
            }
        },
        setSearchResultIds(state, { payload }: PayloadAction<GymState['searchResultIds']>) {
            state.searchResultIds = payload;
        }
    }
});

export const {
    setGymLoadingState,
    setOffersLoadingState,
    updateGym,
    updateSocialMedia,
    addAbonnements,
    updateCurrentGymId,
    setAllGymsLoadingState,
    addGym,
    setSearchString,
    updateOpeningTime,
    removeAbonnement,
    setTags,
    addBenefit,
    removeBenefit,
    setSelectedTags,
    updateAbonnement,
    removeSocialMedia,
    updateGymField,
    setSearchResultIds
} = slice.actions;

export const gymReducer = slice.reducer;

interface AddAbonnementsProps {
    id: IGym['internalId'];
    abonnements: Offer[];
}

interface AddBenefitProps {
    id: IGym['internalId'];
    benefit: IBenefit[];
}
