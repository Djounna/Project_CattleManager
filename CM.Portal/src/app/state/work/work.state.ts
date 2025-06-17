import { JobDetailsDto, JobDto, UserDto } from "../../api/models";

export interface WorkStateModel{
    Jobs: JobDto[],
    JobsDetails : JobDetailsDto[],
    CurrentUserJobsDetails : JobDetailsDto[],
    Workers : UserDto[]
}