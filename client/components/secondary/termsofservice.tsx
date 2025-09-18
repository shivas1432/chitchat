"use client"
import React from 'react';
import { PageHeader, PageHeaderHeading, PageHeaderDescription } from '@/components/secondary/pageheader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TermsOfServicePage = () => {
  return (
    <div className="container max-w-[88rem] mx-auto p-6">
      <PageHeader>
        <PageHeaderHeading>Terms of Service</PageHeaderHeading>
        <PageHeaderDescription>
          These terms govern your use of Chitchat and outline the guidelines to ensure a secure and respectful experience for all users.
        </PageHeaderDescription>
      </PageHeader>
      <Card className="mt-6 p-4 bg-transparent border-zinc-300 dark:border-zinc-800">
        <CardContent>
          <h2 className="text-xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            By accessing and using Chitchat, you agree to comply with these terms of service. If you disagree with any part of these terms, please discontinue using the platform. These terms are designed to ensure that all interactions on Chitchat remain positive, respectful, and lawful.
          </p>
          <h2 className="text-xl font-semibold mb-4">User Responsibilities</h2>
          <p className="mb-4">
            You are responsible for your use of Chitchat, including all content you share, messages you send, and interactions with other users. We encourage respectful and thoughtful communication. Any misuse of the platform, including harassment, hate speech, or sharing illegal content, will result in account suspension or termination.
          </p>
          <h2 className="text-xl font-semibold mb-4">Data and Privacy</h2>
          <p className="mb-4">
            Chitchat is committed to protecting your privacy and data. We do not share your personal information with third parties without your consent, except as required by law. By using Chitchat, you agree to our Privacy Policy, which outlines how we handle your data.
          </p>
          <h2 className="text-xl font-semibold mb-4">Content Ownership</h2>
          <p className="mb-4">
            You retain ownership of the content you create and share on Chitchat. By posting content, you grant Chitchat a non-exclusive, royalty-free, worldwide license to use, display, and distribute your content within the platform. You are responsible for ensuring that your content does not violate any laws or infringe on third-party rights.
          </p>
          <h2 className="text-xl font-semibold mb-4">Third-Party Integrations</h2>
          <p className="mb-4">
            Chitchat may integrate with third-party services to enhance functionality. We do not control or endorse any content from these third parties and are not liable for their practices or data handling. Please review the respective terms and policies of any third-party services you use through Chitchat.
          </p>
          <h2 className="text-xl font-semibold mb-4">Limitation of Liability</h2>
          <p className="mb-4">
            Chitchat and its developers are not liable for any direct or indirect damages resulting from your use of the platform. We make no guarantees regarding the availability, accuracy, or reliability of Chitchat and reserve the right to update or discontinue any features at our discretion.
          </p>
          <Button>
            <a href="https://twitter.com/ShivaS1432" target="_blank" rel="noopener noreferrer">
              Contact Support
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TermsOfServicePage;
