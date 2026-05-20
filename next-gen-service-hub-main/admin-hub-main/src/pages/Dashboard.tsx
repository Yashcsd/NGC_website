import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase, ContactMessage } from '@/lib/supabase';
import { MessageSquare, CalendarDays, TrendingUp, Clock } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { format, isToday, startOfDay } from 'date-fns';

interface Stats {
  totalMessages: number;
  todayMessages: number;
  latestMessage: ContactMessage | null;
}

export default function Dashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        // Fetch all messages
        const { data, error } = await supabase
          .from('contact')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;

        const messages = data as ContactMessage[];
        const todayStart = startOfDay(new Date());
        
        const todayMessages = messages.filter(msg => 
          new Date(msg.created_at) >= todayStart
        );

        setStats({
          totalMessages: messages.length,
          todayMessages: todayMessages.length,
          latestMessage: messages[0] || null,
        });
      } catch (err) {
        console.error('Error fetching stats:', err);
        setError('Failed to load dashboard data. Please try again.');
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="space-y-6 animate-fade-in">
        <div>
          <Skeleton className="h-8 w-48 mb-2" />
          <Skeleton className="h-4 w-64" />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-10 w-10 rounded-lg" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-16 mb-2" />
                <Skeleton className="h-3 w-32" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Card className="max-w-md shadow-card border-destructive/20">
          <CardContent className="pt-6 text-center">
            <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="h-6 w-6 text-destructive" />
            </div>
            <p className="text-destructive font-medium mb-2">Error Loading Data</p>
            <p className="text-sm text-muted-foreground">{error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Welcome back!</h2>
        <p className="text-muted-foreground">
          Here's an overview of your contact submissions.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Total Messages */}
        <Card className="shadow-card hover:shadow-elevated transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Messages
            </CardTitle>
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <MessageSquare className="h-5 w-5 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{stats?.totalMessages || 0}</div>
            <p className="text-xs text-muted-foreground mt-1">
              All time submissions
            </p>
          </CardContent>
        </Card>

        {/* Today's Messages */}
        <Card className="shadow-card hover:shadow-elevated transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Today's Messages
            </CardTitle>
            <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center">
              <CalendarDays className="h-5 w-5 text-success" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{stats?.todayMessages || 0}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {format(new Date(), 'MMMM d, yyyy')}
            </p>
          </CardContent>
        </Card>

        {/* Latest Message */}
        <Card className="shadow-card hover:shadow-elevated transition-shadow md:col-span-2 lg:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Latest Message
            </CardTitle>
            <div className="h-10 w-10 rounded-lg bg-info/10 flex items-center justify-center">
              <Clock className="h-5 w-5 text-info" />
            </div>
          </CardHeader>
          <CardContent>
            {stats?.latestMessage ? (
              <>
                <div className="text-lg font-semibold text-foreground truncate">
                  {stats.latestMessage.name}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {isToday(new Date(stats.latestMessage.created_at))
                    ? `Today at ${format(new Date(stats.latestMessage.created_at), 'h:mm a')}`
                    : format(new Date(stats.latestMessage.created_at), 'MMM d, yyyy')}
                </p>
              </>
            ) : (
              <p className="text-sm text-muted-foreground">No messages yet</p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Quick Overview
          </CardTitle>
          <CardDescription>
            Summary of your contact form activity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Conversion Rate</p>
                <p className="text-2xl font-bold text-foreground">
                  {stats?.totalMessages ? '100%' : '0%'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
              <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center">
                <CalendarDays className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Average per Day</p>
                <p className="text-2xl font-bold text-foreground">
                  {stats?.todayMessages || 0}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
