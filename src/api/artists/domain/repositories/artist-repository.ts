// Entities
import { IArtist } from '@api/artists/domain/entities/artist/artist-entity';
import { IBaseCrudRepository } from '@api/shared/base-crud/domain/repositories/base-crud-repository';

export type ArtistRepository = IBaseCrudRepository<IArtist, any>;
