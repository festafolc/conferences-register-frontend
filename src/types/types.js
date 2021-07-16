export const types = {
    uiOpenModal: '[ui] Open modal',
    uiCloseModal: '[ui] Close modal',

    eventSetActive: '[event] Set Active',
    eventParticipantsSetActive: '[event] Set Participants Event Active',
    eventLogout: '[event] Logout event',

    eventStartAddNew: '[event] Start Add New',
    eventAddNew: '[event] Add new',
    eventClearActiveEvent: '[event] Clear active event',
    eventUpdate: '[event] Update event',
    eventDelete: '[event] Delete event',
    eventLoaded: '[event] Events loaded',
    eventDownloaded: '[event] Download event',

    authCheckingFinish: '[auth] Finish checking login state',
    authStartLogin: '[auth] Start login',
    authLogin: '[auth] Login',
    authStartRegister: '[auth] Start token renew',
    authStartTokenRenew: '[auth] Start token renew',
    authLogout: '[auth] Logout',

    participantEventLoadedWithoutToken: '[participant] Events loaded without token',
    participantEventSetActive: '[participant] Event Set Active',
    participantRegistration: '[event] Registration event',
}