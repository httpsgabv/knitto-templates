import { UniqueEntityID } from '#core/entities/unique-entity-id.js';
import { makeUser } from '#test/factories/make-user.js';
import { InMemoryUsersRepository } from '#test/users/in-memory-users-repository.js';
import type { UserExportData } from '../repositories/users-repository.js';
import { ExportUserDataUseCase } from './export-user-data.use-case.js';

describe('ExportUserDataUseCase', () => {
  let repository: InMemoryUsersRepository;
  let sut: ExportUserDataUseCase;

  beforeEach(() => {
    repository = new InMemoryUsersRepository();
    sut = new ExportUserDataUseCase(repository);
  });

  it('should return all user data', async () => {
    const user = makeUser({}, new UniqueEntityID('user-1'));
    repository.items.push(user);

    const exportData: UserExportData = {
      user,
      projects: [
        {
          id: 'project-1',
          name: 'My Project',
          description: 'A project',
          createdAt: new Date('2026-01-01'),
          updatedAt: null,
        },
      ],
      prompts: [
        {
          id: 'prompt-1',
          projectId: 'project-1',
          name: 'My Prompt',
          description: null,
          content: 'Hello world',
          tags: ['greeting'],
          wildcardGroupIds: [],
          createdAt: new Date('2026-01-01'),
          updatedAt: null,
        },
      ],
      wildcardGroups: [
        {
          id: 'wg-1',
          projectId: null,
          name: 'My Group',
          slug: 'my-group',
          description: null,
          scope: 'global',
          wildcards: [{ id: 'w-1', value: 'alpha' }],
          createdAt: new Date('2026-01-01'),
          updatedAt: null,
        },
      ],
    };
    repository.exportData.set('user-1', exportData);

    const result = await sut.execute({ requesterId: 'user-1' });

    expect(result.isSuccess()).toBe(true);
    if (result.isSuccess()) {
      expect(result.value.user.id.toString()).toBe('user-1');
      expect(result.value.projects).toHaveLength(1);
      expect(result.value.projects[0].name).toBe('My Project');
      expect(result.value.prompts).toHaveLength(1);
      expect(result.value.prompts[0].name).toBe('My Prompt');
      expect(result.value.wildcardGroups).toHaveLength(1);
      expect(result.value.wildcardGroups[0].wildcards).toHaveLength(1);
    }
  });

  it('should return empty collections for a user with no data', async () => {
    const user = makeUser({}, new UniqueEntityID('user-2'));
    repository.items.push(user);
    repository.exportData.set('user-2', {
      user,
      projects: [],
      prompts: [],
      wildcardGroups: [],
    });

    const result = await sut.execute({ requesterId: 'user-2' });

    expect(result.isSuccess()).toBe(true);
    if (result.isSuccess()) {
      expect(result.value.projects).toHaveLength(0);
      expect(result.value.prompts).toHaveLength(0);
      expect(result.value.wildcardGroups).toHaveLength(0);
    }
  });

  it('should fail with ResourceNotFoundError when user does not exist', async () => {
    const result = await sut.execute({ requesterId: 'non-existent' });

    expect(result.isFailure()).toBe(true);
    if (result.isFailure()) {
      expect(result.value.message).toBe('User not found');
    }
  });
});
