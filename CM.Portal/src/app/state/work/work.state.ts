
import { JobDto, UserDto } from "../../api/models";

export interface WorkStateModel{
    Jobs: JobDto[],
    Workers : UserDto[]
}