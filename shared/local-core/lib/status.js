export const INIT = 'INIT';
export const IN_PROGRESS = 'IN_PROGRESS';
export const COMPLETED = 'COMPLETED';
export const ERROR = 'ERROR';

export const isInit = status => status === INIT;
export const isInProgress = status => status === IN_PROGRESS;
export const isCompleted = status => status === COMPLETED;
export const isError = status => status === ERROR;
