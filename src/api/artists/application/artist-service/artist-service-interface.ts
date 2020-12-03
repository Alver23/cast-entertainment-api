// Interfaces
import { IBaseCrudService } from '@api/shared/base-crud/application/base-crud-interface';

// Entities
import { IArtist } from '@api/artists/domain/entities/artist/artist-entity';

export type IArtistService = IBaseCrudService<IArtist, any>;
