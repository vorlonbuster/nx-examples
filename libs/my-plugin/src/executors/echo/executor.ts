import { EchoExecutorSchema } from './schema';
import * as enquirer from 'enquirer';

export default async function runExecutor(options: EchoExecutorSchema) {
  console.log('Executor ran for Echo', options);

  const r = await enquirer.prompt<{
    workspaceType: 'standalone' | 'integrated';
  }>([
    {
      type: 'autocomplete',
      name: 'workspaceType',
      message: `Integrated monorepo, or standalone project?`,
      initial: 1,
      choices: [
        {
          name: 'integrated',
          message:
            'Integrated Monorepo:  Nx creates a monorepo that contains multiple projects.',
        },
        {
          name: 'standalone',
          message:
            'Standalone:           Nx creates a single project and makes it fast.',
        },
      ],
    },
  ])

  console.log('Result', r);

  return {
    success: true,
  };
}
