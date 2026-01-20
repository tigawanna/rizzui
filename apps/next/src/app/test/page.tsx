'use client';

import { Title } from '@/components/title';
import { Button } from 'rizzui/button';
import { Tab } from 'rizzui/tabs';
import { Switch } from 'rizzui/switch';
import { Card } from '@/components/card';
import { Modal } from 'rizzui/modal';
import { useState } from 'react';
import { Drawer } from 'rizzui/drawer';
import { Dropdown } from 'rizzui/dropdown';
import { FileInput } from 'rizzui/file-input';


export default function TestPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <Title className="2xl:text-base font-medium">Hello World</Title>
        <Button onClick={() => setIsOpen(true)} className='bg-red-500'>Open Modal</Button> <br />
        <Button onClick={() => setIsDrawerOpen(true)} className='bg-blue-500'>Open Drawer</Button> <br />
        <Tab className='mb-10'>
          <Tab.List>
            <Tab.ListItem>Tab 1</Tab.ListItem>
            <Tab.ListItem>Tab 2</Tab.ListItem>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>Content 1</Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
          </Tab.Panels>
        </Tab>
        <Tab vertical>
          <Tab.List>
            <Tab.ListItem>Tab 1</Tab.ListItem>
            <Tab.ListItem>Tab 2</Tab.ListItem>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>Content 1</Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
          </Tab.Panels>
        </Tab>

        <Switch label="Switch" switchClassName='' />

        <Card className='p-0'>
          Card Body
        </Card>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className='p-6'>
            <h3 className='text-2xl font-bold mb-4'>Modal Title</h3>
            <p className='text-gray-600 dark:text-gray-300 mb-6'>
              This is a modal dialog. Click outside or press ESC to close.
            </p>
            <div className='flex gap-3 justify-end'>
              <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button onClick={() => setIsOpen(false)}>Confirm</Button>
            </div>
          </div>
        </Modal>

        <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} enableResizer={true}>
          <div className='p-6'>
            <h3 className='text-2xl font-bold mb-4'>Drawer Title</h3>
            <p className='text-gray-600 dark:text-gray-300 mb-6'>
              This is a drawer dialog. Click outside or press ESC to close.
            </p>
          </div>
        </Drawer>

        <Dropdown>
          <Dropdown.Trigger>
            <Button as="span">Open Dropdown</Button>
          </Dropdown.Trigger>
          <Dropdown.Menu anchorWidth>
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
            <Dropdown.Item>Item 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <FileInput label="File Input" />
      </div>
    </div>
  );
}

