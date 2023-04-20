import {type PartialDeep} from 'type-fest';
import {type CardResponse} from 'src/types/cards';

export const Errors = {
  cardNotFound: expect.objectContaining({
    status: 404,
    statusText: 'Not Found',
    data: 'The requested resource was not found.',
  }),
};

export function checkCardResponse(data?: PartialDeep<CardResponse>): jest.Expect {
  return expect.objectContaining({
    id: data?.id ?? expect.any(String),
    badges: data?.badges
      ? expect.objectContaining({
          attachmentsByType: data?.badges?.attachmentsByType
            ? expect.objectContaining({
                trello: data?.badges?.attachmentsByType?.trello
                  ? expect.objectContaining({
                      board:
                        data?.badges?.attachmentsByType?.trello?.board ??
                        expect.any(Number),
                      card:
                        data?.badges?.attachmentsByType?.trello?.card ??
                        expect.any(Number),
                    })
                  : expect.any(Object),
              })
            : expect.any(Object),
          location: data?.badges?.location ?? expect.any(Boolean),
          votes: data?.badges?.votes ?? expect.any(Number),
          viewingMemberVoted: data?.badges?.viewingMemberVoted ?? expect.any(Boolean),
          subscribed: data?.badges?.subscribed ?? expect.any(Boolean),
          fogbugz: data?.badges?.fogbugz ?? expect.any(String),
          checkItems: data?.badges?.checkItems ?? expect.any(Number),
          checkItemsChecked: data?.badges?.checkItemsChecked ?? expect.any(Number),
          checkItemsEarliestDue:
            data?.badges?.checkItemsEarliestDue ??
            expect.toBeOneOf([null, String, Number]),
          comments: data?.badges?.comments ?? expect.any(Number),
          attachments: data?.badges?.attachments ?? expect.any(Number),
          description: data?.badges?.description ?? expect.any(Boolean),
          due: data?.badges?.due ?? expect.toBeOneOf([null, String, Number]),
          dueComplete: data?.badges?.dueComplete ?? expect.any(Boolean),
          start: data?.badges?.start ?? expect.toBeOneOf([null, String, Number]),
        })
      : expect.any(Object),
    checkItemStates: data?.checkItemStates ? data?.checkItemStates : expect.any(Array),
    closed: data?.closed ?? expect.any(Boolean),
    dueComplete: data?.dueComplete ?? expect.any(Boolean),
    dateLastActivity: data?.dateLastActivity ?? expect.any(String),
    desc: data?.desc ?? expect.any(String),
    descData: data?.descData
      ? expect.objectContaining({emoji: expect.any(Object)})
      : expect.any(Object),
    due: data?.due ?? expect.toBeOneOf([null, String, Number]),
    dueReminder: data?.dueReminder ?? expect.toBeOneOf([null, String, Number]),
    email: data?.email ?? expect.toBeOneOf([null, String, Number]),
    idBoard: data?.idBoard ?? expect.any(String),
    idChecklists: data?.idChecklists ? data?.idChecklists : expect.any(Array),
    idList: data?.idList ?? expect.any(String),
    idMembers: data?.idMembers ? data?.idMembers : expect.any(Array),
    idMembersVoted: data?.idMembersVoted ? data?.idMembersVoted : expect.any(Array),
    idShort: data?.idShort ?? expect.any(Number),
    idAttachmentCover:
      data?.idAttachmentCover ?? expect.toBeOneOf([null, String, Number]),
    labels: data?.labels ? data?.labels : expect.any(Array),
    idLabels: data?.idLabels ? data?.idLabels : expect.any(Array),
    manualCoverAttachment: data?.manualCoverAttachment ?? expect.any(Boolean),
    name: data?.name ?? expect.any(String),
    pos: data?.pos ?? expect.any(Number),
    shortLink: data?.shortLink ?? expect.any(String),
    shortUrl: data?.shortUrl ?? expect.any(String),
    start: data?.start ?? expect.toBeOneOf([null, String, Number]),
    subscribed: data?.subscribed ?? expect.any(Boolean),
    url: data?.url ?? expect.any(String),
    cover: data?.cover
      ? expect.objectContaining({
          idAttachment:
            data?.cover?.idAttachment ?? expect.toBeOneOf([null, String, Number]),
          color: data?.cover?.color ?? expect.toBeOneOf([null, String, Number]),
          idUploadedBackground:
            data?.cover?.idUploadedBackground ?? expect.toBeOneOf([null, String, Number]),
          size: data?.cover?.size ?? expect.any(String),
          brightness: data?.cover?.brightness ?? expect.any(String),
          idPlugin: expect.toBeOneOf([null, String, Number]),
        })
      : expect.any(Object),
    isTemplate: data?.isTemplate ?? expect.any(Boolean),
    cardRole: data?.cardRole ?? expect.toBeOneOf([null, String, Number]),
  });
}
